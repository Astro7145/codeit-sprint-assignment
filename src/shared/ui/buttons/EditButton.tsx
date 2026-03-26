import { CheckIcon } from "@/src/shared/icons";

interface EditButtonProps {
	disabled?: boolean;
}

/**
 * @see https://www.figma.com/design/zcM3VfCNbtiqt5aLhlv4sV/-KDT-%EB%8B%A8%EA%B8%B0%EC%8B%AC%ED%99%94--%EC%A7%80%EC%9B%90%EC%9E%90-%EA%B3%BC%EC%A0%9C?node-id=106-2607&t=5OD2ZZozwTQoCI4e-4
 */
export default function EditButton({ disabled }: EditButtonProps) {
	return (
		<button
			className="relative flex items-center justify-center gap-x-1 border-2 border-slate-900 rounded-full py-4.5 px-10.5 bg-lime-300 disabled:bg-slate-200 cursor-pointer disabled:cursor-not-allowed"
			disabled={disabled}
		>
			<CheckIcon className="stroke-slate-900" />
			<span className="text-base font-bold text-slate-900">
				수정 완료
			</span>
			<span className="w-full h-full rounded-full bg-slate-900 absolute top-1 left-[3.65px] -z-10" />
		</button>
	);
}
