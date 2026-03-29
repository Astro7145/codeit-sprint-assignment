interface MemoContainerProps {
	/**@param {string} memo 메모 내용 */
	memo: string;

	/**@param {function} onChangeMemo 메모 내용이 변경될 때 호출되는 함수 */
	onChangeMemo: (memo: string) => void;

	/**@param {boolean} isLoading 메모 내용 로딩 중 여부, 로딩 중일 때는 textarea를 비활성화하고 placeholder로 "불러오는 중..."을 표시 */
	isLoading: boolean;
}

export default function MemoContainer({
	memo,
	onChangeMemo,
	isLoading,
}: MemoContainerProps) {
	return (
		<div className="flex flex-col py-6 items-center rounded-3xl gap-y-6 flex-1 h-full bg-[url('/images/memo.png')] bg-no-repeat bg-center px-4">
			<span className="text-base font-extrabold text-amber-800 select-none">
				Memo
			</span>
			<textarea
				className="appearance-none text-base font-normal text-slate-800 focus:outline-0 resize-none w-full text-center"
				rows={12}
				onChange={(e) => onChangeMemo(e.target.value)}
				placeholder={
					isLoading ? "불러오는 중..." : "메모를 입력하세요."
				}
				value={memo}
				disabled={isLoading}
			></textarea>
		</div>
	);
}
