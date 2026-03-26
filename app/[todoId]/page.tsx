import { TodoDetail } from "@/src/views";

export default async function Page({
	params,
}: {
	params: Promise<{ todoId: string }>;
}) {
	const { todoId } = await params;

	return <TodoDetail todoId={Number(todoId)} />;
}
