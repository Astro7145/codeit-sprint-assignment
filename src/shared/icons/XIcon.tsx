interface XIconProps {
	// stroke 색상을 지정하는 props입니다. 기본값은 "stroke-white"입니다.
	className?: string;
}

export default function XIcon({ className = "stroke-white" }: XIconProps) {
	return (
		<svg
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path d="M4 4L12 12" strokeWidth="2" strokeLinecap="round" />
			<path d="M12 4L4 12" strokeWidth="2" strokeLinecap="round" />
		</svg>
	);
}
