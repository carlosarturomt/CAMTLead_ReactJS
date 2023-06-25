import React, { useEffect } from "react"
import Glide from "@glidejs/glide"
// import { GetData } from "../../views/Account/GetData";

const sliderConfiguration = {
	gap: 0,
	perView: 1,
	startAt: 0,
	focusAt: "center",
	autoplay: "2000",
	type: "carousel"
};

const Carrousel = () => {
	const slider = new Glide('.glide', sliderConfiguration);

	useEffect(() => {
		slider.mount()
	}, [])

	return (
		<>
			{/* <GetData /> */}
			<div className='glide bg-red-200 h-[400px] mt-[-40px]'>
				<div className='glide__track bg-red-400' data-glide-el='track'>
					<ul className='glide__slides bg-red-700 flex'>
						<li className='glide__slide slider bg-green-500'>
							<img
								className="w-full h-[350px] border-8 border-indigo-600"
								src="https://museodelosmetales.files.wordpress.com/2021/04/image-1.png"
								alt=""
							/>
							1
						</li>
						<li className='glide__slide slider bg-green-400'>
							<img
								className="w-full h-[350px] border-8 border-indigo-600"
								src="https://i.ytimg.com/vi/skUZarcW79M/maxresdefault.jpg"
								alt=""
							/>
							2
						</li>
						<li className='glide__slide slider bg-green-600'>
							<img
								className="w-full h-[350px] border-8 border-indigo-600"
								src="https://museodelosmetales.files.wordpress.com/2021/04/image-1.png"
								alt=""
							/>3</li>
						<li className='glide__slide slider bg-green-300'>
							<img
								className="w-full h-[350px] border-8 border-indigo-600"
								src="https://i.ytimg.com/vi/skUZarcW79M/maxresdefault.jpg"
								alt=""
							/>4</li>
					</ul>
				</div>
				<div className='glide__arrows bg-yellow-500 absolute bottom-0 left-[45%]' data-glide-el='controls'>
					<button
						className='glide__arrow glide__arrow--prev'
						data-glide-dir='<'
					>
						prev
					</button>
					<button
						className='glide__arrow glide__arrow--next'
						data-glide-dir='>'
					>
						next
					</button>
				</div>
			</div>

		</>
	)
}

export default Carrousel