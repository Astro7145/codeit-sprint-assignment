"use client";

import { deleteTodoItem } from "@/src/features";
import { XIcon } from "@/src/shared/icons";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

interface DeleteButtonProps {
	todoId: number;
}

/**
 * @see https://www.figma.com/design/zcM3VfCNbtiqt5aLhlv4sV/-KDT-%EB%8B%A8%EA%B8%B0%EC%8B%AC%ED%99%94--%EC%A7%80%EC%9B%90%EC%9E%90-%EA%B3%BC%EC%A0%9C?node-id=106-2607&t=5OD2ZZozwTQoCI4e-4
 */
export default function DeleteButton({ todoId }: DeleteButtonProps) {
	const router = useRouter();

	const queryClient = useQueryClient();

	const { mutate } = useMutation({
		mutationFn: () => deleteTodoItem(todoId),
		onSuccess: () => {
			// TodoListRow에서 한 것과 마찬가지로 최신화되지 않은 데이터가 화면에 먼저 표시되는 것을 방지하기 위해 쿼리 자체를 삭제
			queryClient.removeQueries({ queryKey: ["todoList"] });
			// 삭제된 todoItem에 대한 queryKey도 함께 삭제
			queryClient.removeQueries({ queryKey: ["todoItem", todoId] });

			alert("삭제가 완료되었습니다.");

			router.push("/");
		},
		onError: () => {
			alert("삭제에 실패하였습니다. 다시 시도해주세요.");
		},
	});

	const handleTodoDelete = () => {
		if (confirm("해당 todo를 삭제하시겠습니까?")) mutate();
	};

	return (
		<button
			className="relative flex items-center justify-center gap-x-1 border-2 border-slate-900 rounded-full py-4.5 px-4.5 mobile:px-10.5 bg-rose-500  cursor-pointer"
			onClick={handleTodoDelete}
		>
			<XIcon />
			<span className="hidden text-base font-bold text-white text-nowrap mobile:inline">
				삭제하기
			</span>
		</button>
	);
}
