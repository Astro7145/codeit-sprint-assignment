"use client";

import { PictureAddIcon, PictureEditIcon } from "@/src/shared/icons";
import { useRef } from "react";
import { cn } from "@/src/shared/lib";
import { uploadImage } from "@/src/features";
import { ImageResponse } from "../../types";

interface PictureButtonProps {
	/**@param {string} className 버튼의 추가적인 클래스 이름 */
	className?: string;

	/**@param {function} setImageUrl 이미지 URL을 설정하는 함수 */
	setImageUrl: (url: string) => void;

	/**@param {boolean} isImageExists 이미지가 존재하는지 여부, 버튼의 스타일을 결정하는 데 사용 */
	isImageExists?: boolean;
}

export default function PictureButton({
	className,
	setImageUrl,
	isImageExists,
}: PictureButtonProps) {
	const imageInputRef = useRef<HTMLInputElement>(null);

	const handleButtonClick = () => {
		imageInputRef.current?.click();
	};

	// pc의 이미지를 불러올 때 썸네일 이미지를 설정하기 위한 함수
	const handleImageChange = async (
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		const imageFile = event.target.files?.[0];

		// 선택된 파일이 없을 경우 업로드 처리를 취소하고 return
		if (!imageFile) {
			return;
		}

		// 만약 파일 타입이 jpeg도 아니고 png도 아닐 경우 업로드 처리를 취소하고 return
		if (!["image/jpeg", "image/png"].includes(imageFile.type)) {
			alert("이미지 파일(PNG, JPEG)만 업로드 할 수 있습니다.");
			return;
		}

		// 만약 파일 이름이 영어가 아닐 경우 업로드 처리를 취소하고 return
		if (!/^[A-Za-z]+$/.test(imageFile.name.split(".")[0])) {
			alert("파일 이름은 영문자만 포함될 수 있습니다.");
			return;
		}

		// 만약 파일 크기가 5MB를 초과할 경우 업로드 처리를 취소하고 return
		if (imageFile.size > 5 * 1024 * 1024) {
			alert("이미지 파일 크기는 5MB를 초과할 수 없습니다.");
			return;
		}

		// 이미지 파일을 FormData 객체에 담아서 서버로 전송하여 업로드 처리
		const formData = new FormData();

		formData.append("image", imageFile);

		let imageUrl = "";

		try {
			imageUrl = (await uploadImage<ImageResponse>(formData)).url;
		} catch {
			alert("이미지 업로드에 실패했습니다. 다시 시도해주세요.");
			return;
		}

		// 이미지가 정상적으로 업로드될 경우 썸네일 이미지 설정
		setImageUrl(imageUrl);
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
				alt="todo 이미지"
				className="hidden"
				ref={imageInputRef}
				accept="image/*, .png, .jpg"
				onChange={handleImageChange}
			/>
		</button>
	);
}
