interface CheckboxProps {
	checked?: boolean;
	onChange?: (checked: boolean) => void;
	disabled?: boolean;
}

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
