export default function Checkbox() {
	return (
		<input
			type="checkbox"
			className="transition-all h-8 w-8 appearance-none bg-[url('/icons/checkbox_off.svg')] checked:bg-[url('/icons/checkbox_on.svg')] bg-no-repeat bg-center cursor-pointer"
		/>
	);
}
