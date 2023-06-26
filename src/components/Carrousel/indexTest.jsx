import React, { useEffect, useState } from "react"
import {
	collection,
	getDocs,
	getFirestore,
} from "firebase/firestore";
import firebaseConfig from "../../config/firebase-config";
import { initializeApp } from "firebase/app";
import { useParams } from "react-router-dom";
import 'flowbite';

const CarrouselTest = () => {
	const [data, setData] = useState([]);
	const { articleId } = useParams();

	const app = initializeApp(firebaseConfig);
	const db = getFirestore(app);
	const docRef = collection(db, "articles");

	useEffect(() => {
		test()
	}, [articleId]);

	const test = async () => {
		const arr = [];
		const data = await getDocs(docRef);
		data.forEach((item) => {
			arr.push(item.data());
		});
		setData(arr);
	}

	return (
		<>
			{/* <div className='glide bg-red-200 h-[400px] mt-[-40px]'>
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
			</div>, */}

			{/* <div id="default-carousel" className="relative w-full" data-carousel="slide">
				<div className="relative h-56 overflow-hidden rounded-lg md:h-96">
					<div className="hidden duration-700 ease-in-out relative" data-carousel-item>
						<img src="https://museodelosmetales.files.wordpress.com/2021/04/image-1.png" className="absolute block w-full -translate-x-1/2 -translate-y-[25%] left-1/2" alt="..." />
					</div>
					<div className="hidden duration-700 ease-in-out relative" data-carousel-item>
						<img src="https://i.ytimg.com/vi/skUZarcW79M/maxresdefault.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-[25%] left-1/2" alt="..." />
					</div>
				</div>
				<div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
					<button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
					<button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
					<button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
				</div>
				<button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
					<span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
						<svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
						<span className="sr-only">Previous</span>
					</span>
				</button>
				<button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
					<span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
						<svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
						<span className="sr-only">Next</span>
					</span>
				</button>
			</div>, */}

			<div id="default-carousel" className="relative w-full mt-[40px]" data-carousel="slide">
				<div className="relative h-56 overflow-hidden rounded-lg md:h-96">
					{data.map((item) => {
						return (
							<div className="hidden duration-700 ease-in-out relative" data-carousel-item key={item.articleTitle}>
								<img src={item.url} className="absolute block w-full -translate-x-1/2 -translate-y-[25%] left-1/2" alt={item.articleTitle} />
								<h1>{item.articleTitle}</h1>
								<h2>{item.caption}</h2>
							</div>
						);
					})}
					<div className="hidden duration-700 ease-in-out relative" data-carousel-item>
						<img src="https://museodelosmetales.files.wordpress.com/2021/04/image-1.png" className="absolute block w-full -translate-x-1/2 -translate-y-[25%] left-1/2" alt="..." />
						<h1>articleTitle</h1>
						<h2>caption</h2>
					</div>
					<div className="hidden duration-700 ease-in-out relative" data-carousel-item>
						<img src="https://i.ytimg.com/vi/skUZarcW79M/maxresdefault.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-[25%] left-1/2" alt="..." />
					</div>
				</div>
				<button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
					<span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
						<svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
						<span className="sr-only">Previous</span>
					</span>
				</button>
				<button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
					<span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
						<svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
						<span className="sr-only">Next</span>
					</span>
				</button>
			</div>
		</>
	)
}

export default CarrouselTest