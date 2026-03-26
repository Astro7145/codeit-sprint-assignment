interface AddIconProps {
	// stroke 색상을 지정하는 props입니다. 기본값은 "stroke-white"입니다.
	className?: string;
}

export default function AddIcon({ className = "stroke-white" }: AddIconProps) {
	return (
		<svg
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path d="M2 8L14 8" strokeWidth="2" strokeLinecap="round" />
			<path d="M8 14L8 2" strokeWidth="2" strokeLinecap="round" />
		</svg>
	);
}
