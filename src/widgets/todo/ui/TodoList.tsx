import { TodoListRow } from "@/src/features";
import { TodoItem } from "@/src/shared";
import Image from "next/image";

interface TodoListProps {
	type: "todo" | "done";
	todos: Array<TodoItem>;
}

export default function TodoList({ type, todos }: TodoListProps) {
	return (
		<div className="flex flex-col w-full">
			<Image
				src={
					type === "todo"
						? "/images/todo@3x.png"
						: "/images/done@3x.png"
				}
				alt={type === "todo" ? "Todo" : "Done"}
				width={101}
				height={36}
				priority
			/>
			{todos.length === 0 ? (
				type === "todo" ? (
					<div className="flex flex-col items-center w-full mobile:mt-16 ">
						<div className="w-30 mobile:w-60 h-30 mobile:h-60 bg-[url('/images/todo_empty_sm.png')] mobile:bg-[url('/images/todo_empty_lg.png')] bg-center bg-no-repeat" />
						<span className="text-base font-bold text-center text-slate-400">
							할 일이 없어요.
							<br />
							TODO를 새롭게 추가해주세요!
						</span>
					</div>
				) : (
					<div className="flex flex-col items-center w-full mobile:mt-16 ">
						<div className="w-30 mobile:w-60 h-30 mobile:h-60 bg-[url('/images/done_empty_sm.png')] mobile:bg-[url('/images/done_empty_lg.png')] bg-center bg-no-repeat" />
						<span className="text-base font-bold text-center text-slate-400">
							아직 다 한 일이 없어요.
							<br />
							해야 할 일을 체크해보세요!
						</span>
					</div>
				)
			) : (
				<div className="flex flex-col mt-4 gap-y-4">
					<TodoListRow />
					<TodoListRow />
					<TodoListRow />
				</div>
			)}
		</div>
	);
}
