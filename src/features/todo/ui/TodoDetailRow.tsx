/* eslint-disable react-hooks/set-state-in-effect */

import Checkbox from "@/src/shared/ui/checkbox/Checkbox";

interface TodoDetailRowProps {
	/**@param {string} name todo의 이름 */
	name: string;

	/**@param {function} onChangeName todo의 이름이 변경될 때 호출되는 함수 */
	onChangeName: (name: string) => void;

	/**@param {boolean} isCompleted todo의 완료 상태 */
	isCompleted: boolean;

	/**@param {function} onChangeIsCompleted todo의 완료 상태가 변경될 때 호출되는 함수 */
	onChangeIsCompleted: (isCompleted: boolean) => void;

	/**@param {boolean} isLoading 데이터 로딩 상태, 로딩 중에는 입력과 체크박스 변경이 불가능하도록 함 */
	isLoading: boolean;
}

/**
 * @see https://www.figma.com/design/zcM3VfCNbtiqt5aLhlv4sV/-KDT-%EB%8B%A8%EA%B8%B0%EC%8B%AC%ED%99%94--%EC%A7%80%EC%9B%90%EC%9E%90-%EA%B3%BC%EC%A0%9C?node-id=95-2372&t=5OD2ZZozwTQoCI4e-4
 */
export default function TodoDetailRow({
	name,
	isCompleted,
	onChangeName,
	onChangeIsCompleted,
	isLoading,
}: TodoDetailRowProps) {
	const handleCheckedChange = (checked: boolean) => {
		// 만약 사용자가 checkbox를 클릭하여 상태를 변경한다면 setState로 해당 내용을 반영
		onChangeIsCompleted(checked);
	};

	const handleTextChange = (text: string) => {
		// 만약 사용자가 todo 이름 상태를 변경한다면 setState로 해당 내용을 반영
		onChangeName(text);
	};

	return (
		<label className="flex items-center w-full h-16 pl-3 transition-all bg-white border-2 cursor-pointer rounded-3xl border-slate-900 has-checked:bg-violet-200">
			<span className="flex items-center gap-x-4 w-full">
				<Checkbox
					checked={isCompleted}
					onChange={(checked) => handleCheckedChange(checked)}
					disabled={isLoading}
				/>
				<input
					type="text"
					className="appearance-none text-xl font-bold underline text-slate-900 truncate w-full"
					placeholder={
						isLoading ? "불러오는 중..." : "이름을 입력하세요."
					}
					value={name}
					disabled={isLoading}
					onChange={(e) => handleTextChange(e.target.value)}
				/>
			</span>
		</label>
	);
}
