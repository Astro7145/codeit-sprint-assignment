import { ImageContainer, MemoContainer, TodoDetailRow } from "@/src/features";

interface TodoDetailProps {
	todoId: number;
}

export default function TodoDetail({ todoId }: TodoDetailProps) {
	return (
		<div className="flex flex-col h-full py-6 px-25.5 bg-white gap-y-6">
			<TodoDetailRow />
			<div className="flex w-full gap-x-6">
				<ImageContainer />
				<MemoContainer />
			</div>
		</div>
	);
}
