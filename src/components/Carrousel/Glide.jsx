import { useEffect, useState } from "react"
import Glide from "@glidejs/glide"
import {
	collection,
	getDocs,
	getFirestore,
} from "firebase/firestore";
import firebaseConfig from "../../config/firebase-config";
import { initializeApp } from "firebase/app";
// import { useParams } from "react-router-dom";
import "./Glide.css"

const sliderConfiguration = {
	gap: 0,
	perView: 1,
	startAt: 0,
	focusAt: "center",
	autoplay: "3000",
	type: "carousel"
};
const Carrousel = () => {
	const [data, setData] = useState([]);
	// const { articleId } = useParams();

	const app = initializeApp(firebaseConfig);
	const db = getFirestore(app);
	const docRef = collection(db, "articles");

	const slider = new Glide('.glide', sliderConfiguration);


	useEffect(() => {
		test()
		setTimeout(() => {
			slider.mount()
		}, "1000")
	}, []);

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
			<div className='glide mt-[-40px]'>
				<div className='glide__track' data-glide-el='track'>
					<ul className='glide__slides'>
						{data.slice(0, 3).map((item) => {
							return (
								<li key={item.articleTitle} className='glide__slide slider flex items-center justify-center relative'>
									<img className="h-[50vh] w-full blur-sm" src={item.url} alt={item.articleTitle} />
									<div className="h-[50vh] w-full absolute text-gray-50 gradient-opacity flex justify-end items-end flex-col px-4 md:px-20">
										<h1 className="text-3xl md:text-6xl font-bold">{item.articleTitle}</h1>
										<h2 className="text-1xl md:text-3xl font-semibold">{item.caption}</h2>
									</div>
								</li>
							);
						})}
					</ul>
				</div>
				<div className='glide__arrows absolute w-full bottom-[45%] flex justify-between px-2' data-glide-el='controls'>
					<button
						className='glide__arrow glide__arrow--prev material-symbols-outlined text-gray-50 bg-[#8b1fff40] rounded-full py-2 pl-3 pr-1 hover:bg-[#8b1fff]'
						data-glide-dir='<'
					>
						arrow_back_ios
					</button>
					<button
						className='glide__arrow glide__arrow--next material-symbols-outlined text-gray-50 bg-[#8b1fff40] rounded-full py-2 pl-3 pr-1 hover:bg-[#8b1fff]'
						data-glide-dir='>'
					>
						arrow_forward_ios
					</button>
				</div>
			</div>
		</>
	)
}

export default Carrousel