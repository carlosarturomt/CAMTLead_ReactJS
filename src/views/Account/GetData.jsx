import {
	collection,
	getDocs,
	getFirestore,
} from "firebase/firestore";
import firebaseConfig from "../../config/firebase-config";
import { initializeApp } from "firebase/app";
import { useEffect, useState } from "react";
import { CardArticle } from "../../components/Card/CardArticle";
import { useParams } from "react-router-dom";
// import CardArticle from "../../components/Card/CardArticle";

function GetData() {
	const [data, setData] = useState([]);
	const { articleId } = useParams();

	const app = initializeApp(firebaseConfig);
	const db = getFirestore(app);
	const docRef = collection(db, "articles");

	useEffect(() => {
		test();
	}, [articleId]);

	const test = async () => {
		const arr = [];
		const data = await getDocs(docRef);
		data.forEach((item) => {
			arr.push(item.data());
			// arr.reverse().push(item.data());
		});
		setData(arr);
	}

	return (
		<div className="flex justify-center flex-wrap text-gray-50 pb-28 my-20">
			{data.slice(0, 6).map((item) => {
				return (
					<CardArticle data={item} key={item.articleTitle}>
						<button>See more...</button>
					</CardArticle>
				);
			})}
		</div>
	);
}

export { GetData };
