export default function MemoContainer() {
	return (
		<div className="flex flex-col py-6 items-center rounded-3xl gap-y-6 flex-1 h-full bg-[url('/images/memo.png')] bg-no-repeat bg-center px-4">
			<span className="text-base font-extrabold text-amber-800">
				Memo
			</span>
			<textarea
				className="appearance-none text-base font-normal text-slate-800 focus:outline-0 resize-none w-full text-center"
				rows={12}
			></textarea>
		</div>
	);
}
