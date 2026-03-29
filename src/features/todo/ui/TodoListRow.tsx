import { updateTodo } from "@/src/entities";
import { TodoItem, TodoRequest } from "@/src/shared";
import Checkbox from "@/src/shared/ui/checkbox/Checkbox";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Link from "next/link";

interface TodoListRowProps {
	/**@param {number} todoId 각 todo 항목의 id */
	todoId: number;

	/**@param {TodoRequest} todoData 각 todo 항목의 데이터 */
	todoData: TodoRequest;
}

/**
 * @see https://www.figma.com/design/zcM3VfCNbtiqt5aLhlv4sV/-KDT-%EB%8B%A8%EA%B8%B0%EC%8B%AC%ED%99%94--%EC%A7%80%EC%9B%90%EC%9E%90-%EA%B3%BC%EC%A0%9C?node-id=71-509&t=5OD2ZZozwTQoCI4e-4
 */
export default function TodoListRow({ todoId, todoData }: TodoListRowProps) {
	const { isCompleted, name } = todoData;

	const queryClient = useQueryClient();

	// 사용자 편의성을 위한 낙관적 업데이트 구현
	const { mutate } = useMutation({
		mutationFn: (checked: boolean) =>
			updateTodo<TodoItem>(todoId, {
				isCompleted: checked,
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
			/**
			 * useQuery는 API를 완전히 불러오기 전까지는 기존에 캐시되어 있던 데이터를 표시하는 방식으로 되어 있어
			 * todoList에서 체크박스를 해제하고 다시 화면으로 들어가면 데이터를 불러오는 잠깐 동안 체크박스가 체크된 상태로 보이는 현상이 발생함
			 * 따라서 쿼리 무효화가 아닌 쿼리 자체를 지워서 위와 같은 혼동을 방지함
			 */
			queryClient.removeQueries({ queryKey: ["todoItem", todoId] });
		},
	});

	const handleCompletedChange = (checked: boolean) => {
		mutate(checked);
	};

	return (
		<div className="group w-full h-12.5 bg-white border-2 border-slate-900 rounded-full pl-3 flex items-center has-checked:bg-violet-100 transition-all">
			<span className="flex items-center gap-x-4 w-full">
				<Checkbox
					checked={isCompleted}
					onChange={handleCompletedChange}
				/>
				<Link
					href={`/${todoId}`}
					className="text-base font-normal text-slate-800 group-has-checked:line-through hover:underline truncate"
				>
					{name}
				</Link>
			</span>
		</div>
	);
}
