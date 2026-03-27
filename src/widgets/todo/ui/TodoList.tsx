"use client";

import { TodoListRow } from "@/src/features";
import { TodoItem } from "@/src/shared";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { getTodoList } from "../api";

interface TodoListProps {
	isCompleted: boolean;
}

export default function TodoList({ isCompleted }: TodoListProps) {
	const { data } = useQuery({
		queryKey: ["todoList"],
		queryFn: () => getTodoList<TodoItem[]>(),
		select: (data) =>
			data.filter((item) => item.isCompleted === isCompleted),
	});

	return (
		<div className="flex flex-col w-full">
			<Image
				src={
					isCompleted === false
						? "/images/todo@3x.png"
						: "/images/done@3x.png"
				}
				alt={isCompleted === false ? "Todo" : "Done"}
				width={101}
				height={36}
				priority
			/>
			{data && data.length > 0 ? (
				<div className="flex flex-col mt-4 gap-y-4">
					{data?.map((todo) => (
						<TodoListRow
							key={todo.id}
							todoId={todo.id}
							content={{
								name: todo.name,
								memo: todo.memo || "",
								imageUrl: todo.imageUrl || "",
								isCompleted: todo.isCompleted,
							}}
						/>
					))}
				</div>
			) : isCompleted === false ? (
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
			)}
		</div>
	);
}
