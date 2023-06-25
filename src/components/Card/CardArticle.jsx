function CardArticle(props) {
	const { data } = props;
	const { url, articleTitle, caption, author } = data;

	return (
		<aside className="bg-[#022e5f21] flex flex-col sm:flex-row gap-3 sm:items-center justify-between px-5 py-4 rounded-md my-4">
			<div>
				<span className="text-slate-400 text-sm">{articleTitle}</span>
				<img src={url} alt={`${articleTitle} Image`} />
				<h3 className="font-bold mt-px text-gray-100">{caption}</h3>
				<div className="flex items-center gap-3 mt-2">
					<span className="bg-[#ffffff17] text-gray-400 rounded-full px-3 py-1 text-sm min-w-fit">
						{author}
					</span>
				</div>
			</div>
			<div>{props.children}</div>
		</aside>
	);
}

export { CardArticle };

// import React, { useEffect } from "react"
// import Glide from "@glidejs/glide"
// // import { GetData } from "../../views/Account/GetData";

// const sliderConfiguration = {
// 	gap: 0,
// 	perView: 1,
// 	startAt: 0,
// 	focusAt: "center",
// 	autoplay: "2000",
// 	type: "carousel"
// };

// const CardArticle = () => {
// 	const slider = new Glide('.glide', sliderConfiguration);

// 	useEffect(() => {
// 		slider.mount()
// 	}, [])

// 	return (
// 		<>
// 			{/* <GetData /> */}
// 			<div className='glide bg-red-200 h-[400px] mt-[-40px]'>
// 				<div className='glide__track bg-red-400' data-glide-el='track'>
// 					<ul className='glide__slides bg-red-700 flex'>
// 						<li className='glide__slide slider bg-green-500'>
// 							<img
// 								className="w-full h-[350px] border-8 border-indigo-600"
// 								src="https://museodelosmetales.files.wordpress.com/2021/04/image-1.png"
// 								alt=""
// 							/>
// 							1
// 						</li>
// 						<li className='glide__slide slider bg-green-400'>
// 							<img
// 								className="w-full h-[350px] border-8 border-indigo-600"
// 								src="https://i.ytimg.com/vi/skUZarcW79M/maxresdefault.jpg"
// 								alt=""
// 							/>
// 							2
// 						</li>
// 						<li className='glide__slide slider bg-green-600'>
// 							<img
// 								className="w-full h-[350px] border-8 border-indigo-600"
// 								src="https://museodelosmetales.files.wordpress.com/2021/04/image-1.png"
// 								alt=""
// 							/>3</li>
// 						<li className='glide__slide slider bg-green-300'>
// 							<img
// 								className="w-full h-[350px] border-8 border-indigo-600"
// 								src="https://i.ytimg.com/vi/skUZarcW79M/maxresdefault.jpg"
// 								alt=""
// 							/>4</li>
// 					</ul>
// 				</div>
// 				<div className='glide__arrows bg-yellow-500 absolute bottom-0 left-[45%]' data-glide-el='controls'>
// 					<button
// 						className='glide__arrow glide__arrow--prev'
// 						data-glide-dir='<'
// 					>
// 						prev
// 					</button>
// 					<button
// 						className='glide__arrow glide__arrow--next'
// 						data-glide-dir='>'
// 					>
// 						next
// 					</button>
// 				</div>
// 			</div>

// 		</>
// 	)
// }

// export default CardArticle