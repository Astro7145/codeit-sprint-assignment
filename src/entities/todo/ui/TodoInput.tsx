interface TodoInputProps {
	/**@param {string} text 입력된 텍스트 값 */
	text?: string;

	/**@param {function} onChange 텍스트 값이 변경될 때 호출되는 함수 */
	onChange?: (value: string) => void;

	/**@param {function} onPressEnter 엔터 키가 눌렸을 때 호출되는 함수 */
	onPressEnter?: () => void;
}

/**
 * @see https://www.figma.com/design/zcM3VfCNbtiqt5aLhlv4sV/-KDT-%EB%8B%A8%EA%B8%B0%EC%8B%AC%ED%99%94--%EC%A7%80%EC%9B%90%EC%9E%90-%EA%B3%BC%EC%A0%9C?node-id=84-444&t=5OD2ZZozwTQoCI4e-4
 */
export default function TodoInput({
	text,
	onChange,
	onPressEnter,
}: TodoInputProps) {
	return (
		<input
			type="text"
			placeholder="할 일을 입력해주세요"
			className="w-full px-6 text-base font-normal border-2 focus:outline-0 text-slate-900 rounded-3xl h-14 border-slate-900 bg-slate-100 placeholder:text-base placeholder:text-slate-500 placeholder:font-normal"
			value={text}
			onChange={(e) => onChange?.(e.target.value)}
			onKeyDown={(e) => e.key === "Enter" && onPressEnter?.()}
			autoFocus
		/>
	);
}
