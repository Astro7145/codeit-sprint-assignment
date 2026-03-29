import { getQueryClient, TodoItem } from "@/src/shared";
import { TodoHome } from "@/src/views";
import { getTodoList } from "@/src/features";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

// 서버 사이드에서 데이터를 미리 패치하여 클라이언트에서 페이지가 로드될 때 즉시 데이터를 사용할 수 있도록 함
export default async function Page() {
	const queryClient = getQueryClient();

	await queryClient.prefetchQuery({
		queryKey: ["todoList"],
		queryFn: () => getTodoList<TodoItem[]>(),
	});

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<TodoHome />
		</HydrationBoundary>
	);
}
