/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import {
	getTodoById,
	ImageContainer,
	MemoContainer,
	TodoDetailRow,
} from "@/src/features";
import { DeleteButton, EditButton, TodoItem, TodoRequest } from "@/src/shared";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

interface TodoDetailProps {
	todoId: number;
}

export default function TodoDetail({ todoId }: TodoDetailProps) {
	const [todo, setTodo] = useState<TodoRequest | undefined>();

	const { data, isLoading } = useQuery({
		queryKey: ["todoItem", todoId],
		queryFn: () => getTodoById<TodoItem>(todoId),
	});

	// 데이터 로딩 완료 후 화면 출력용 todo 상태를 API에서 가져온 데이터로 초기화
	useEffect(() => {
		if (data) {
			setTodo({
				name: data.name,
				memo: data.memo,
				imageUrl: data.imageUrl,
				isCompleted: data.isCompleted,
			});
		}
	}, [data]);

	// 각 수정된 항목을 해당 항목만 업데이트 하도록 하는 핸들러 함수들
	const handleNameChange = (name: string) => {
		setTodo((prev) => (prev ? { ...prev, name } : prev));
	};

	const handleMemoChange = (memo: string) => {
		setTodo((prev) => (prev ? { ...prev, memo } : prev));
	};

	const handleImageUrlChange = (imageUrl: string) => {
		setTodo((prev) => (prev ? { ...prev, imageUrl } : prev));
	};

	const handleIsCompletedChange = (isCompleted: boolean) => {
		setTodo((prev) => (prev ? { ...prev, isCompleted } : prev));
	};

	return (
		<div className="flex flex-col h-full py-6 px-4 mobile:px-6 tablet:px-25.5 bg-white gap-y-6">
			<TodoDetailRow
				name={todo?.name || ""}
				isCompleted={todo?.isCompleted || false}
				isLoading={isLoading}
				onChangeName={handleNameChange}
				onChangeIsCompleted={handleIsCompletedChange}
			/>
			<div className="flex flex-col tablet:flex-row w-full gap-x-6">
				<ImageContainer
					imageUrl={todo?.imageUrl || ""}
					onChangeImageUrl={handleImageUrlChange}
				/>
				<MemoContainer
					memo={todo?.memo || ""}
					onChangeMemo={handleMemoChange}
					isLoading={isLoading}
				/>
			</div>
			<div className="flex justify-center tablet:justify-end gap-x-4 items-center">
				<EditButton
					todoId={todoId}
					todoData={todo}
					initialData={data}
				/>
				<DeleteButton todoId={todoId} />
			</div>
		</div>
	);
}
