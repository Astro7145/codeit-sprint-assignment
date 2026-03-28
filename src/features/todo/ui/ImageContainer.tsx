import { PictureAddButton } from "@/src/shared";
import Image from "next/image";

interface ImageContainerProps {
	imageUrl: string;
	onChangeImageUrl: (imageUrl: string) => void;
}

/**
 * 기본적으로 API 통해 가져온 이미지 url을 사용,
 * 하지만 만약 해당 필드가 비어있다면 placeholder 이미지로 대체함
 * 또한, 사용자가 선택한 이미지가 있다면 해당 이미지를 업로드 후 url을 받아와 썸네일 이미지로 설정
 */
export default function ImageContainer({
	imageUrl,
	onChangeImageUrl,
}: ImageContainerProps) {
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
				setImageUrl={onChangeImageUrl}
				isImageExists={!!imageUrl.trim()}
			/>
		</span>
	);
}
