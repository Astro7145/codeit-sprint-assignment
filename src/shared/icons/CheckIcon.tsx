interface CheckIconProps {
	// stroke 색상을 지정하는 props입니다. 기본값은 "stroke-white"입니다.
	className?: string;
}

export default function CheckIcon({
	className = "stroke-white",
}: CheckIconProps) {
	return (
		<svg
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				d="M2 7L6.5 11.5L14 4"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
