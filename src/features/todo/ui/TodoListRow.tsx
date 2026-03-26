import Checkbox from "@/src/shared/ui/checkbox/Checkbox";
import Link from "next/link";

/**
 * @see https://www.figma.com/design/zcM3VfCNbtiqt5aLhlv4sV/-KDT-%EB%8B%A8%EA%B8%B0%EC%8B%AC%ED%99%94--%EC%A7%80%EC%9B%90%EC%9E%90-%EA%B3%BC%EC%A0%9C?node-id=71-509&t=5OD2ZZozwTQoCI4e-4
 */
export default function TodoListRow() {
	return (
		<div className="group w-full h-12.5 bg-white border-2 border-slate-900 rounded-full pl-3 flex items-center has-checked:bg-violet-100 transition-all">
			<span className="flex items-center gap-x-4">
				<Checkbox />
				<Link
					href={`/1`}
					className="text-base font-normal text-slate-800 group-has-checked:line-through"
				>
					비타민 챙겨 먹기
				</Link>
			</span>
		</div>
	);
}
