import { useEffect, useState } from "react";
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
import {
	getStorage,
	ref as refStorage,
	uploadBytes,
	getDownloadURL,
} from "firebase/storage";

function CreateFirestore() {
	const [articleData, setArticleData] = useState();
	const [file, setFile] = useState({});
	const storage = getStorage();
	const storageRef = refStorage(storage, `articles/${file.name}`);

	/**
	*
	* @param {Object} event Re write the Data in File with UseState()
	*/
	const fileHandler = (event) => {
		const file = event.target.files[0];
		setFile(file);
		console.log(file);
	};
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
	 * @returns Call the Value of the Function fileHandler() to get the URL of the File, after that save the Data in an Object
	 */
	const saveCv = async () => {
		await uploadBytes(storageRef, file);
		const url = await getDownloadURL(storageRef);
		return url;
	};

	/**
	 *
	 * @param {Object} event Receive an Object
	 * @returns Write data in the Object of Firebase in Cloud Firestore DataBase
	 */
	const saveData = () => {
		const app = initializeApp(firebaseConfig);
		const db = getFirestore(app);
		addDoc(collection(db, "articles"), {
			...articleData,
		});
	};

	/**
	 *
	 * @param {Object} event Receive an Object
	 * @returns Write data in the Object of Firebase in Cloud Firestore DataBase
	 */
	const alertSend = async (event) => {
		event.preventDefault();
		if (articleData) {
			const result = await saveCv();
			articleData.url = result;
			saveData();
		}
		alert("Enviado");
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
						onSubmit={alertSend}
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

						<div className="my-4">
							<label htmlFor="" className="text-gray-300 text-sm">
								Adjuntar CV
							</label>
							<input
								required
								type="file"
								name="candidateGrade"
								className="block w-full rounded-md border-0 focus:outline-none focus:ring-1 focus:ring-gray-100 py-1 px-1.5 text-gray-100 bg-[#ffffff17]"
								onChange={fileHandler}
							/>
						</div>

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
