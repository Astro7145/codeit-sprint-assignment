"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

/**
 * @see https://www.figma.com/design/zcM3VfCNbtiqt5aLhlv4sV/-KDT-%EB%8B%A8%EA%B8%B0%EC%8B%AC%ED%99%94--%EC%A7%80%EC%9B%90%EC%9E%90-%EA%B3%BC%EC%A0%9C?node-id=73-655&t=5OD2ZZozwTQoCI4e-4
 */
export default function Appbar() {
	const router = useRouter();
	const pathname = usePathname();

	const handleButtonClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();

		if (pathname === "/") {
			// Next.js의 Link, router.push(), router.refresh() 등은 동일 화면 이동 시 각 컴포넌트의 상태를 유지하기 때문에, 강제로 새로고침하여 초기 상태로 돌아가도록 구현
			// 새로고침의 기준이 모호하여 완벽히 새로고침 되도록 구현했습니다.
			window.location.reload();
		} else {
			router.push("/");
		}
	};

	return (
		<nav className="fixed h-(--header-height) z-20 flex items-center justify-center w-full bg-white border-b border-gray-200">
			<span className="w-full px-6 max-w-300">
				<Link
					href="/"
					className="block w-fit"
					onClick={handleButtonClick}
				>
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
				</Link>
			</span>
		</nav>
	);
}
