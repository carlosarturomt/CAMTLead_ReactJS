import {
	collection,
	getDocs,
	getFirestore,
} from "firebase/firestore";
import firebaseConfig from "../../config/firebase-config";
import { initializeApp } from "firebase/app";
import { useEffect, useState } from "react";
import { CardArticle } from "../../components/Card/CardArticle";
import { Link } from "react-router-dom";

function GetData() {
	const [data, setData] = useState([]);
	const app = initializeApp(firebaseConfig);
	const db = getFirestore(app);
	const docRef = collection(db, "articles");

	useEffect(() => {
		test();
	}, []);

	const test = async () => {
		const arr = [];
		const data = await getDocs(docRef);
		data.forEach((article) => {
			arr.push(article);
		});
		setData(arr);
	}

	return (
		<div className="flex justify-center flex-wrap text-gray-50 pb-28 mt-20">
			{data.slice(0, 6).map((article) => {
				return (
					<CardArticle data={article.data()} key={article.id}>
						<Link to={article.id}>
							<button className="bg-[#ffffff17] text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center hover:bg-[#ffffff30] hover:animate-pulse">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-4 w-4"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth="2"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M13 7l5 5m0 0l-5 5m5-5H6"
									/>
								</svg>
							</button>
						</Link>
					</CardArticle>
				);
			})}
		</div>
	);
}

export { GetData };
