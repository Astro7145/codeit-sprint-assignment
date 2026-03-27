import { getQueryClient, TodoItem } from "@/src/shared";
import { TodoHome } from "@/src/views";
import { getTodoList } from "@/src/widgets";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

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
