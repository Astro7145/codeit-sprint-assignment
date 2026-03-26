import { PictureAddIcon } from "@/src/shared/icons";

interface PictureAddButtonProps {
	className?: string;
}

export default function PictureAddButton({ className }: PictureAddButtonProps) {
	return (
		<button
			className={`flex items-center justify-center w-16 h-16 rounded-full bg-slate-200 cursor-pointer ${className}`}
		>
			<PictureAddIcon className="stroke-slate-500" />
		</button>
	);
}
