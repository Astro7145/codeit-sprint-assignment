import { ImageContainer, MemoContainer, TodoDetailRow } from "@/src/features";
import { DeleteButton, EditButton } from "@/src/shared";

interface TodoDetailProps {
	todoId: number;
}

export default function TodoDetail({ todoId }: TodoDetailProps) {
	return (
		<div className="flex flex-col h-full py-6 px-4 mobile:px-6 tablet:px-25.5 bg-white gap-y-6">
			<TodoDetailRow />
			<div className="flex flex-col tablet:flex-row w-full gap-x-6">
				<ImageContainer />
				<MemoContainer />
			</div>
			<div className="flex justify-center tablet:justify-end gap-x-4 items-center">
				<EditButton disabled />
				<DeleteButton />
			</div>
		</div>
	);
}
