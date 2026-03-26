"use client";

import { PictureAddButton } from "@/src/shared";
import { useState } from "react";
import Image from "next/image";

export default function ImageContainer() {
	const [imageUrl, setImageUrl] = useState<string | null>(null);

	return (
		<span className="relative flex items-center justify-center border-2 border-dashed h-77.75 w-full tablet:w-96 border-slate-300 bg-slate-50 rounded-3xl overflow-clip">
			<Image
				src={imageUrl || "/images/img_placeholder.png"}
				alt="Uploaded image"
				fill
				objectFit="none"
			/>
			<PictureAddButton
				className="absolute bottom-4 right-4"
				setImageUrl={setImageUrl}
				isImageExists={!!imageUrl}
			/>
		</span>
	);
}
