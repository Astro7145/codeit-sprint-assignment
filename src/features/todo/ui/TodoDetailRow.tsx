import Checkbox from "@/src/shared/ui/checkbox/Checkbox";

/**
 * @see https://www.figma.com/design/zcM3VfCNbtiqt5aLhlv4sV/-KDT-%EB%8B%A8%EA%B8%B0%EC%8B%AC%ED%99%94--%EC%A7%80%EC%9B%90%EC%9E%90-%EA%B3%BC%EC%A0%9C?node-id=95-2372&t=5OD2ZZozwTQoCI4e-4
 */
export default function TodoDetailRow() {
	return (
		<label className="flex items-center justify-center w-full h-16 pl-3 transition-all bg-white border-2 cursor-pointer rounded-3xl border-slate-900 has-checked:bg-violet-200">
			<span className="flex items-center gap-x-4">
				<Checkbox />
				<span className="text-xl font-bold underline text-slate-900">
					비타민 챙겨 먹기
				</span>
			</span>
		</label>
	);
}
