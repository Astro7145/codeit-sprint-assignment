import Image from "next/image";

/**
 * @see https://www.figma.com/design/zcM3VfCNbtiqt5aLhlv4sV/-KDT-%EB%8B%A8%EA%B8%B0%EC%8B%AC%ED%99%94--%EC%A7%80%EC%9B%90%EC%9E%90-%EA%B3%BC%EC%A0%9C?node-id=73-655&t=5OD2ZZozwTQoCI4e-4
 */
export default function Appbar() {
	return (
		<nav className="fixed h-(--header-height) z-20 flex items-center justify-center w-full bg-white border-b border-gray-200">
			<span className="w-full px-6 max-w-300">
				<Image
					src="/images/logo_lg.png"
					alt="Logo"
					width={151}
					height={40}
					className="hidden mobile:block"
					priority
				/>
				<Image
					src="/images/logo_sm.png"
					alt="Logo"
					width={71}
					height={40}
					className="block mobile:hidden"
					priority
				/>
			</span>
		</nav>
	);
}
