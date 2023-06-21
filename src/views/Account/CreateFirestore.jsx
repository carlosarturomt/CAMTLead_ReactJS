import React, { useState } from "react";
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
	const [vacancyData, setVacancyData] = useState({});

	/**
	 *
	 * @param {Object} event Rewrite data of the Vacancy in an Object from Cloud Firestore DataBase
	 */
	const changeHandler = (event) => {
		const property = event.target.name;
		const value = event.target.value;
		setVacancyData({ ...vacancyData, [property]: value });
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
			vacancyData,
		});
	};

	return (
		<TemplateLogged>
			<section className="flex justify-center flex-col items-center py-2 ml-auto mr-auto w-[95%] md:w-2/4 lg:w-3/5 ">
				<form
					className="w-full px-2 md:mr-4 md:p-6 rounded-md bg-[#022e5f21]"
					onSubmit={saveData}
				>
					{/* <div className="flex justify-end">
						<InputDate on={changeDate} />
					</div> */}
					<InputForm label="Vacante" name="articleTitle" on={changeHandler} />
					<InputForm label="Área" name="article" on={changeHandler} />
					{/* <InputForm
						label="Categoría"
						name="categoryVacancy"
						on={changeHandler}
					/> */}
					{/* <InputForm
						label="Subcategoría"
						name="subcategoryVacancy"
						on={changeHandler}
					/> */}
					{/* <InputForm label="Salario" name="salaryVacancy" on={changeHandler} />
					<InputForm
						label="Jornada Laboral"
						name="typeVacancy"
						on={changeHandler}
					/>
					<InputForm label="Modalidad" name="typeLocation" on={changeHandler} />
					<InputForm
						label="Ubicación"
						name="locationPlace"
						on={changeHandler}
					/>
					<InputForm
						label="Educación mínima requerida"
						name="requiredVacancy"
						on={changeHandler}
					/>
					<LabelForm label="Descripción" name="content" on={changeHandler} /> */}

					<div>
						<button
							className="bg-[#1f82fc70] py-1 px-4 rounded-md font-semibold text-gray-100 hover:bg-[#1f82fcae] animate-pulse hover:animate-none"
							type="submit"
						>
							CreateFirestore
						</button>
					</div>
				</form>
			</section>
		</TemplateLogged>
	);
}

export { CreateFirestore };
