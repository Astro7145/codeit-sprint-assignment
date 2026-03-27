interface CheckboxProps {
	checked?: boolean;
	onChange?: (checked: boolean) => void;
}

export default function Checkbox({ checked, onChange }: CheckboxProps) {
	return (
		<input
			type="checkbox"
			checked={checked}
			onChange={(e) => onChange?.(e.target.checked)}
			className="shrink-0 transition-all h-8 w-8 appearance-none bg-[url('/icons/checkbox_off.svg')] checked:bg-[url('/icons/checkbox_on.svg')] bg-no-repeat bg-center cursor-pointer"
		/>
	);
}
