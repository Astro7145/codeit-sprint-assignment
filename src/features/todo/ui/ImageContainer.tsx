import { PictureAddButton } from "@/src/shared";

export default function ImageContainer() {
	return (
		<span className="relative flex items-center justify-center border-2 border-dashed h-77.75 w-96 border-slate-300 bg-slate-50 rounded-3xl bg-[url('/images/img_placeholder.png')] bg-no-repeat bg-center">
			<PictureAddButton className="absolute bottom-4 right-4" />
		</span>
	);
}
