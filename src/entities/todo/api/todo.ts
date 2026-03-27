import { TodoRequest } from "@/src/shared";

export async function updateTodo<T>(
	todoId: number,
	todo: TodoRequest,
): Promise<T> {
	const res = await fetch(
		process.env.NEXT_PUBLIC_REST_API_URL + "/items/" + todoId,
		{
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(todo),
		},
	);

	if (!res.ok) {
		throw new Error("Failed to update todo");
	}

	return res.json();
}
