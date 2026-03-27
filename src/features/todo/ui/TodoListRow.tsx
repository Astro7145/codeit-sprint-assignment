import { updateTodo } from "@/src/entities";
import { TodoItem, TodoRequest } from "@/src/shared";
import Checkbox from "@/src/shared/ui/checkbox/Checkbox";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Link from "next/link";

interface TodoListRowProps {
	todoId: number;
	content: TodoRequest;
}

/**
 * @see https://www.figma.com/design/zcM3VfCNbtiqt5aLhlv4sV/-KDT-%EB%8B%A8%EA%B8%B0%EC%8B%AC%ED%99%94--%EC%A7%80%EC%9B%90%EC%9E%90-%EA%B3%BC%EC%A0%9C?node-id=71-509&t=5OD2ZZozwTQoCI4e-4
 */
export default function TodoListRow({ todoId, content }: TodoListRowProps) {
	const { isCompleted, imageUrl, memo, name } = content;

	const queryClient = useQueryClient();

	// 사용자 편의성을 위한 낙관적 업데이트 구현
	const { mutate } = useMutation({
		mutationFn: (checked: boolean) =>
			updateTodo<TodoItem>(todoId, {
				isCompleted: checked,
				imageUrl,
				memo,
				name,
			}),
		onMutate: async (checked) => {
			// 진행중인 refetch가 낙관적 업데이트로 변경된 UI를 덮어쓰는 것을 방지
			await queryClient.cancelQueries({ queryKey: ["todoList"] });

			// 기존 데이터를 유지하여 통신 오류로 인해 에러가 발생했을 시 롤백에 사용
			const previousTodos = queryClient.getQueryData<TodoItem[]>([
				"todoList",
			]);

			// todoList의 데이터를 직접 수정하여 낙관적 업데이트 수행
			queryClient.setQueryData<TodoItem[]>(["todoList"], (oldTodo) => {
				return oldTodo?.map((todo: TodoItem) =>
					todo.id === todoId
						? { ...todo, isCompleted: checked }
						: todo,
				);
			});

			return { previousTodos };
		},
		// 데이터 반영 실패 시 롤백
		onError: (_, __, context) => {
			queryClient.setQueryData(["todoList"], context?.previousTodos);
		},
		// 모든 과정이 끝난 후 쿼리 무효화를 통해 최신 데이터를 보장함
		onSettled: () => {
			queryClient.invalidateQueries({ queryKey: ["todoList"] });
		},
	});

	const handleCompletedChange = (checked: boolean) => {
		mutate(checked);
	};

	return (
		<div className="group w-full h-12.5 bg-white border-2 border-slate-900 rounded-full pl-3 flex items-center has-checked:bg-violet-100 transition-all">
			<span className="flex items-center gap-x-4">
				<Checkbox
					checked={isCompleted}
					onChange={handleCompletedChange}
				/>
				<Link
					href={`/${todoId}`}
					className="text-base font-normal text-slate-800 group-has-checked:line-through hover:underline"
				>
					{name}
				</Link>
			</span>
		</div>
	);
}
