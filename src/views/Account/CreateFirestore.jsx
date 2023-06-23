import { useState } from "react";
import {
	InputDate,
	InputForm,
	LabelForm,
} from "../../components/Form/InputForm";
import { TemplateLogged } from "../../templates/TemplateLogged";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import firebaseConfig from "../../config/firebase-config";
import { initializeApp } from "firebase/app";

function CreateFirestore() {
	const [articleData, setArticleData] = useState({});

	/**
	 *
	 * @param {Object} event Rewrite data of the Vacancy in an Object from Cloud Firestore DataBase
	 */
	const changeHandler = (event) => {
		const property = event.target.name;
		const value = event.target.value;
		setArticleData({ ...articleData, [property]: value });
	};

	/**
	 *
	 * @param {Object} event Re write the data of the Date in the Vacancy with UseState()
	 */
	const changeDate = (event) => {
		const property = event.target.name;
		const value = new Date(event.target.value);
		setArticleData({ ...articleData, [property]: value });
	};
	/**
	 *
	 * @param {Object} event Receive an Object
	 * @returns Write data in the Object of Firebase in Cloud Firestore DataBase
	 */
	const saveData = (event) => {
		event.preventDefault();
		const app = initializeApp(firebaseConfig);
		const db = getFirestore(app);
		addDoc(collection(db, "articles"), {
			articleData,
		});
	};

	return (
		<TemplateLogged>
			<section className="h-screen flex justify-center flex-col items-center py-2 ml-auto mr-auto w-[95%] md:w-2/4 lg:w-3/5">
				<form
					className="w-full px-2 md:mr-4 md:p-6 rounded-md bg-[#022e5f21]"
					onSubmit={saveData}
				>
					<InputDate on={changeHandler} />
					<InputForm label="Title" name="articleTitle" on={changeDate} />
					<InputForm label="Author" name="author" on={changeHandler} />
					<InputForm label="Category" name="category" on={changeHandler} />
					<LabelForm label="Description" name="content" on={changeHandler} />

					<div>
						<button
							className="bg-[#1f82fc70] py-1 px-4 rounded-md font-semibold text-gray-100 hover:bg-[#1f82fcae] animate-pulse hover:animate-none flex items-center"
							type="submit"
						>
							Send
							<span className="material-symbols-outlined ml-2">send</span>
						</button>
					</div>
				</form>
			</section>
		</TemplateLogged>
	);
}

export { CreateFirestore };
