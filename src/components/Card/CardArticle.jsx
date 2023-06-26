function CardArticle(props) {
	const { data } = props;
	const { url, articleTitle, caption, author } = data;

	return (
		<aside className="bg-[#022e5f21] flex flex-col sm:flex-row gap-3 sm:items-center justify-between px-5 py-4 rounded-md m-3">
			<div className="relative w-[350px] flex items-center justify-center flex-col text-center">
				<span className="text-slate-400 text-sm">{articleTitle}</span>
				<img className="w-[300px] h-[180px]" src={url} alt={`${articleTitle} Image`} />
				<h3 className="font-bold mt-px text-gray-100">{caption}</h3>
				<div className="flex items-center gap-3 mt-2">
					<span className="bg-[#ffffff17] text-gray-400 rounded-full px-3 py-1 text-sm min-w-fit">
						by {author}
					</span>
				</div>
				<div>{props.children}</div>
			</div>
		</aside>
	);
}

export { CardArticle };