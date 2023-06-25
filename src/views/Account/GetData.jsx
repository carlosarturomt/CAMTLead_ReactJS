import {
	collection,
	doc,
	getDoc,
	getDocs,
	getFirestore,
} from "firebase/firestore";
import firebaseConfig from "../../config/firebase-config";
import { initializeApp } from "firebase/app";
import { useEffect, useState } from "react";
import { CardArticle } from "../../components/Card/CardArticle";
import { useParams } from "react-router-dom";

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
		});
		setData(arr);
	}

	return (
		<div className="flex items-center justify-center flex-col text-gray-50 pb-28">
			<h1>Title: {data.articleTitle}</h1>
			{data.map((item) => {
				return (
					<CardArticle data={item} key={item.articleTitle}>
						:(
					</CardArticle>
				);
			})}
		</div>
	);
}

export { GetData };
