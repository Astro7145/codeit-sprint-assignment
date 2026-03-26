import { PictureEditIcon } from "@/src/shared/icons";

export default function PictureEditButton() {
	return (
		<button className="flex items-center justify-center w-16 h-16 border-2 rounded-full bg-slate-900/50 border-slate-900">
			<PictureEditIcon />
		</button>
	);
}
