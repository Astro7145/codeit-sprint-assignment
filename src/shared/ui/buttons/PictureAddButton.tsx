"use client";

import { PictureAddIcon, PictureEditIcon } from "@/src/shared/icons";
import { useRef } from "react";
import { cn } from "@/src/shared/lib";

interface PictureAddButtonProps {
	className?: string;
	setImageUrl?: (url: string) => void;
	isImageExists?: boolean;
}

export default function PictureAddButton({
	className,
	setImageUrl,
	isImageExists,
}: PictureAddButtonProps) {
	const imageInputRef = useRef<HTMLInputElement>(null);

	const handleButtonClick = () => {
		imageInputRef.current?.click();
	};

	const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];

		if (!file) {
			return;
		}

		const reader = new FileReader();

		reader.onload = () => {
			setImageUrl?.(reader.result as string);
		};

		reader.readAsDataURL(file);
	};

	return (
		<button
			className={cn(
				`flex items-center justify-center w-16 h-16 rounded-full cursor-pointer`,
				isImageExists
					? "border-2 bg-slate-900/50 border-slate-900"
					: "bg-slate-200",
				className,
			)}
			onClick={handleButtonClick}
		>
			{isImageExists ? (
				<PictureEditIcon />
			) : (
				<PictureAddIcon className="stroke-slate-500" />
			)}
			<input
				type="file"
				className="hidden"
				ref={imageInputRef}
				accept="image/png, image/jpeg"
				onChange={handleImageChange}
			/>
		</button>
	);
}
