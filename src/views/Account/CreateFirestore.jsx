import { useState } from "react";
import {
	InputDate,
	InputForm,
	LabelForm,
	LabelFormXL,
} from "../../components/Form/InputForm";
import { TemplateLogged } from "../../templates/TemplateLogged";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import firebaseConfig from "../../config/firebase-config";
import { initializeApp } from "firebase/app";
import { HelmetProvider } from "react-helmet-async";
import { SEO } from "../../components/SEO";
import { Logged } from "./Logged";

function CreateFirestore() {
	const [articleData, setArticleData] = useState();
	/**
	 *
	 * @param {Object} event Re write the data of the Date in the Vacancy with UseState()
	 */
	const changeDate = (event) => {
		const property = event.target.name;
		const value = new Date(event.target.value);
		setArticleData({ [property]: value });
	};
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
	 * @param {Object} event Receive an Object
	 * @returns Write data in the Object of Firebase in Cloud Firestore DataBase
	 */
	const saveData = (event) => {
		event.preventDefault();
		const app = initializeApp(firebaseConfig);
		const db = getFirestore(app);
		addDoc(collection(db, "articles"), {
			...articleData,
		});
		alert("Sent");
	};

	return (
		<Logged>
			<TemplateLogged>
				<HelmetProvider>
					<SEO
						title="CamtLead | Create a Post!"
						description="This page is only to Admins and Editors of the Site"
						name="Carlos Arturo Miranda Trujano"
						type="article"
					/>
				</HelmetProvider>
				<section className="py-8 flex justify-center flex-col items-center ml-auto mr-auto w-[95%] md:w-2/4 lg:w-3/5">
					<form
						className="w-full py-4 px-2 md:mr-4 md:p-6 rounded-md bg-[#022e5f21]"
						onSubmit={saveData}
					>
						<InputDate on={changeDate} />
						<InputForm
							label="Article Title"
							name="articleTitle"
							on={changeHandler}
						/>
						<InputForm label="Caption" name="caption" on={changeHandler} />
						<InputForm label="Author" name="author" on={changeHandler} />
						<InputForm label="Category" name="category" on={changeHandler} />
						<InputForm label="Tags" name="tags" on={changeHandler} />
						<LabelForm label="Summary" name="summary" on={changeHandler} />
						<LabelFormXL label="Content" name="content" on={changeHandler} />
						<button
							className="bg-[#1f82fc70] py-1 px-4 rounded-md font-semibold text-gray-100 hover:bg-[#1f82fcae] animate-pulse hover:animate-none flex items-center"
							type="submit"
						>
							Submit
							<span className="material-symbols-outlined ml-2">send</span>
						</button>
					</form>
				</section>
			</TemplateLogged>
		</Logged>
	);
}

export { CreateFirestore };
