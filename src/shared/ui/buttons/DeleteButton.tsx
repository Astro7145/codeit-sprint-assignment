import { XIcon } from "@/src/shared/icons";

/**
 * @see https://www.figma.com/design/zcM3VfCNbtiqt5aLhlv4sV/-KDT-%EB%8B%A8%EA%B8%B0%EC%8B%AC%ED%99%94--%EC%A7%80%EC%9B%90%EC%9E%90-%EA%B3%BC%EC%A0%9C?node-id=106-2607&t=5OD2ZZozwTQoCI4e-4
 */
export default function DeleteButton() {
	return (
		<button className="relative flex items-center justify-center gap-x-1 border-2 border-slate-900 rounded-full py-4.5 px-4.5 mobile:px-10.5 bg-rose-500  cursor-pointer">
			<XIcon />
			<span className="hidden text-base font-bold text-white text-nowrap mobile:inline">
				삭제하기
			</span>
		</button>
	);
}
