/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { CheckIcon } from "@/src/shared/icons";
import { TodoItem, TodoRequest } from "@/src/shared";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTodo } from "@/src/entities";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface EditButtonProps {
	todoId: number;
	todoData?: TodoRequest;
	initialData?: TodoRequest;
}

/**
 * @see https://www.figma.com/design/zcM3VfCNbtiqt5aLhlv4sV/-KDT-%EB%8B%A8%EA%B8%B0%EC%8B%AC%ED%99%94--%EC%A7%80%EC%9B%90%EC%9E%90-%EA%B3%BC%EC%A0%9C?node-id=106-2607&t=5OD2ZZozwTQoCI4e-4
 */
export default function EditButton({
	todoId,
	todoData,
	initialData,
}: EditButtonProps) {
	const router = useRouter();

	const queryClient = useQueryClient();

	const [disabled, setDisabled] = useState(false);

	const { mutate } = useMutation({
		mutationFn: (todo: TodoRequest) =>
			updateTodo<TodoItem>(todoId, { ...todo }),
		onSuccess: () => {
			// TodoListRow에서 한 것과 마찬가지로 최신화되지 않은 데이터가 화면에 먼저 표시되는 것을 방지하기 위해 쿼리 자체를 삭제
			queryClient.removeQueries({ queryKey: ["todoList"] });
			// todo를 수정한 후 같은 화면에 다시 들어올 경우 최신화된 데이터를 보여주기 위해 해당 todoItem에 대한 query를 무효화하여 새로고침
			queryClient.invalidateQueries({ queryKey: ["todoItem", todoId] });

			alert("수정이 완료되었습니다.");

			router.push("/");
		},
		onError: () => {
			alert("수정에 실패하였습니다. 다시 시도해주세요.");
		},
	});

	const validateData = () => {
		// useQuery에서 아직 데이터가 로딩 중일 경우
		if (!initialData) return true;

		// 데이터 불러오기 실패 등으로 데이터가 존재하지 않을 경우
		if (!todoData) return true;

		// 수정된 데이터가 없을 경우
		if (
			initialData.name == todoData.name &&
			initialData.memo == todoData.memo &&
			initialData.imageUrl == todoData.imageUrl &&
			initialData.isCompleted == todoData.isCompleted
		)
			return true;

		return false;
	};

	useEffect(() => {
		setDisabled(validateData());
	}, [todoData, initialData]);

	const handleSubmit = () => {
		if (todoData) {
			const filteredData = Object.fromEntries(
				Object.entries(todoData).filter(([_, value]) => value != null),
			);
			mutate(filteredData);
		}
	};

	return (
		<button
			className="relative flex items-center justify-center gap-x-1 border-2 border-slate-900 rounded-full py-4.5 px-4.5 mobile:px-10.5 bg-lime-300 disabled:bg-slate-200 cursor-pointer disabled:cursor-not-allowed"
			disabled={disabled}
			onClick={handleSubmit}
		>
			<CheckIcon className="stroke-slate-900" />
			<span className="hidden text-base font-bold text-slate-900 text-nowrap mobile:inline">
				수정 완료
			</span>
		</button>
	);
}
