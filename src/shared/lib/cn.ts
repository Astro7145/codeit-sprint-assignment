import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// tailwind css 조건부 적용 및 클래스 이름 병합을 위한 유틸 함수
// 중복되는 클래스를 자동으로 제거해주는 최적화 기능도 제공
export const cn = (...inputs: ClassValue[]) => {
	return twMerge(clsx(inputs));
};
