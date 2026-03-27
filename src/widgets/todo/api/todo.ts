export async function getTodoList<T>(): Promise<T> {
	const res = await fetch(process.env.NEXT_PUBLIC_REST_API_URL + "/items");

	if (!res.ok) {
		throw new Error("Failed to fetch todo list");
	}

	return res.json();
}
