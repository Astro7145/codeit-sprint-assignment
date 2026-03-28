interface MemoContainerProps {
	memo: string;
	onChangeMemo: (memo: string) => void;
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
