interface CheckboxProps {
	/**@param {boolean} checked 체크 상태 */
	checked?: boolean;

	/**@param {function} onChange 체크 상태가 변경될 때 호출되는 함수 */
	onChange?: (checked: boolean) => void;

	/**@param {boolean} disabled 체크박스 비활성화 여부 */
	disabled?: boolean;
}

// 체크 상태에 따라 다른 이미지를 보여주는 방식
export default function Checkbox({
	checked,
	onChange,
	disabled,
}: CheckboxProps) {
	return (
		<input
			type="checkbox"
			checked={checked || false}
			onChange={(e) => onChange?.(e.target.checked)}
			disabled={disabled}
			className="shrink-0 transition-all h-8 w-8 appearance-none bg-[url('/icons/checkbox_off.svg')] checked:bg-[url('/icons/checkbox_on.svg')] bg-no-repeat bg-center cursor-pointer"
		/>
	);
}
