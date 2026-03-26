export default function MemoContainer() {
	return (
		<div className="flex flex-col py-6 items-center rounded-3xl gap-y-6 w-full h-full bg-[url('/images/memo.png')] bg-no-repeat bg-center">
			<span className="text-base font-extrabold text-amber-800">
				Memo
			</span>
			<textarea
				className="appearance-none text-base font-normal text-slate-800"
				rows={12}
			></textarea>
		</div>
	);
}
