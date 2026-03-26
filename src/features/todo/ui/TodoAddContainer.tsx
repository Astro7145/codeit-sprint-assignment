"use client";

import { TodoInput } from "@/src/entities";
import { AddButton } from "@/src/shared";
import { useState } from "react";

export default function TodoAddContainer() {
	const [disabled, setDisabled] = useState(true);

	const handleTextChange = (value: string) => {
		setDisabled(value.trim().length === 0);
	};

	return (
		<div className="flex gap-x-4 items-center">
			<TodoInput onChange={handleTextChange} />
			<AddButton disabled={disabled} />
		</div>
	);
}
