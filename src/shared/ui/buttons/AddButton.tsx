import { AddIcon } from "@/src/shared/icons";

interface AddButtonProps {
	disabled?: boolean;
}

/**
 * @see https://www.figma.com/design/zcM3VfCNbtiqt5aLhlv4sV/-KDT-%EB%8B%A8%EA%B8%B0%EC%8B%AC%ED%99%94--%EC%A7%80%EC%9B%90%EC%9E%90-%EA%B3%BC%EC%A0%9C?node-id=106-2607&t=5OD2ZZozwTQoCI4e-4
 */
export default function AddButton({ disabled }: AddButtonProps) {
	return (
		<button
			className="relative group flex items-center justify-center gap-x-1 border-2 border-slate-900 rounded-full py-4.5 px-4.5 mobile:px-10.5 bg-violet-600 disabled:bg-slate-200 cursor-pointer disabled:cursor-not-allowed"
			disabled={disabled}
		>
			<AddIcon className="stroke-white group-disabled:stroke-slate-900" />
			<span className="hidden text-base font-bold text-white group-disabled:text-slate-900 mobile:inline text-nowrap">
				추가하기
			</span>
			<span className="w-full h-full rounded-full bg-slate-900 absolute top-1 left-[3.65px] -z-10" />
		</button>
	);
}
