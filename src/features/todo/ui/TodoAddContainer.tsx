"use client";

import { TodoInput } from "@/src/entities";
import { AddButton, TodoItem } from "@/src/shared";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { addTodoItem } from "../api";

export default function TodoAddContainer() {
	const queryClient = useQueryClient();

	const [disabled, setDisabled] = useState(true);
	const [todoName, setTodoName] = useState("");

	// 사용자 편의성을 위한 낙관적 업데이트 구현
	const { mutate } = useMutation({
		mutationFn: () => addTodoItem<TodoItem>(todoName),
		onMutate: async () => {
			// 진행중인 refetch가 낙관적 업데이트로 변경된 UI를 덮어쓰는 것을 방지
			await queryClient.cancelQueries({ queryKey: ["todoList"] });

			// 기존 데이터를 유지하여 통신 오류로 인해 에러가 발생했을 시 롤백에 사용
			const previousTodos = queryClient.getQueryData<TodoItem[]>([
				"todoList",
			]);

			// 실제로 DB에 반영되기 전에는 todo의 id가 존재하지 않으므로 임시 id를 생성하여 낙관적 업데이트 수행
			const tempId = Date.now();

			// 임시 데이터 생성
			const newTodo: TodoItem = {
				id: tempId,
				tenantId: process.env.NEXT_PUBLIC_TENANT_ID || "astro7145",
				name: todoName,
				isCompleted: false,
			};

			// todoList의 데이터를 직접 수정하여 낙관적 업데이트 수행
			queryClient.setQueryData<TodoItem[]>(["todoList"], (oldTodo) =>
				oldTodo ? [...oldTodo, newTodo] : [newTodo],
			);

			return { previousTodos };
		},
		// 데이터 반영 실패 시 롤백
		onError: (_, __, context) => {
			queryClient.setQueryData(["todoList"], context?.previousTodos);
		},
		// 모든 과정이 끝난 후 쿼리 무효화를 통해 최신 데이터를 보장함
		onSettled: () => {
			queryClient.invalidateQueries({ queryKey: ["todoList"] });

			// 만일 todo 추가에 실패했을 경우를 대비하여 실제로 데이터 반영이 완료된 후 인풋 필드 초기화
			setTodoName("");
		},
	});

	const handleTextChange = (value: string) => {
		setTodoName(value);
		setDisabled(value.trim().length === 0);
	};

	const handleSubmit = () => {
		if (!disabled) mutate();
	};

	return (
		<div className="flex gap-x-4 items-center">
			<TodoInput
				text={todoName}
				onChange={handleTextChange}
				onPressEnter={handleSubmit}
			/>
			<AddButton disabled={disabled} onClick={handleSubmit} />
		</div>
	);
}
