interface PictureAddIconProps {
	// stroke 색상을 지정하는 props입니다. 기본값은 "stroke-white"입니다.
	className?: string;
}

export default function PictureAddIcon({
	className = "stroke-white",
}: PictureAddIconProps) {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path d="M3 12L21 12" strokeWidth="3" strokeLinecap="round" />
			<path d="M12 21L12 3" strokeWidth="3" strokeLinecap="round" />
		</svg>
	);
}
