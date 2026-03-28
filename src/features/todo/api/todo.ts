export async function getTodoList<T>(): Promise<T> {
	const res = await fetch(
		process.env.NEXT_PUBLIC_REST_API_URL + "/items?page=1&pageSize=100",
	);

	if (!res.ok) {
		throw new Error("Failed to fetch todo list");
	}

	return res.json();
}

export async function addTodoItem<T>(name: string): Promise<T> {
	const res = await fetch(process.env.NEXT_PUBLIC_REST_API_URL + "/items", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ name }),
	});

	if (!res.ok) {
		throw new Error("Failed to add todo item");
	}

	return res.json();
}

export async function getTodoById<T>(id: number): Promise<T> {
	const res = await fetch(
		process.env.NEXT_PUBLIC_REST_API_URL + `/items/${id}`,
	);

	if (!res.ok) {
		throw new Error("Failed to fetch todo item");
	}

	return res.json();
}

export async function uploadImage<T>(image: FormData): Promise<T> {
	const res = await fetch(
		process.env.NEXT_PUBLIC_REST_API_URL + "/images/upload",
		{
			method: "POST",
			body: image,
		},
	);

	if (!res.ok) {
		throw new Error("Failed to upload image");
	}

	return res.json();
}

export async function deleteTodoItem<T>(id: number): Promise<T> {
	const res = await fetch(
		process.env.NEXT_PUBLIC_REST_API_URL + `/items/${id}`,
		{
			method: "DELETE",
		},
	);

	if (!res.ok) {
		throw new Error("Failed to delete todo item");
	}

	return res.json();
}
