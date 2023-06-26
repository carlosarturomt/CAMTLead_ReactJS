import { useEffect, useState } from "react"
import Glide from "@glidejs/glide"
import {
	collection,
	getDocs,
	getFirestore,
} from "firebase/firestore";
import firebaseConfig from "../../config/firebase-config";
import { initializeApp } from "firebase/app";
import { useParams } from "react-router-dom";

const sliderConfiguration = {
	gap: 0,
	perView: 1,
	startAt: 0,
	focusAt: "center",
	autoplay: "3000",
	type: "carousel"
};

const GlideTest = () => {
	const [data, setData] = useState([]);
	const { articleId } = useParams();

	const app = initializeApp(firebaseConfig);
	const db = getFirestore(app);
	const docRef = collection(db, "articles");

	const slider = new Glide('.glide', sliderConfiguration);

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
		slider.mount()
	}

	return (
		<>
			<div className='glide bg-red-200 h-[400px] mt-[-40px]'>
				<div className='glide__track bg-red-400' data-glide-el='track'>
					<ul className='glide__slides bg-red-700 flex'>
						{data.map((item) => {
							return (
								<li key={item.articleTitle} className='glide__slide slider bg-green-500'>
									<img src={item.url} alt={item.articleTitle} />
									<h1>{item.articleTitle}</h1>
									<h2>{item.caption}</h2>
								</li>
							);
						})}
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

export default GlideTest