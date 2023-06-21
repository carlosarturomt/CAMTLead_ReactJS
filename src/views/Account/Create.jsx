import React, { useState } from "react";
import { getDatabase, ref, push } from "firebase/database";
import {
	InputDate,
	InputForm,
	LabelForm,
} from "../../components/Form/InputForm";
import { TemplateLogged } from "../../templates/TemplateLogged";
// import { InputDate, InputForm, LabelForm } from "../Form/InputForm";

function Create() {
	const [vacancyData, setVacancyData] = useState({});
	const database = getDatabase();
	const vacancyRef = ref(database, "/articles");
	const current = new Date();

	// Get Date
	const date = `${current.getFullYear()}-${
		current.getMonth() + 1
	}-${current.getDate()}`;

	/**
	 *
	 * @param {Object} event Rewrite the value of the Date in the Object from Realtime Database
	 */
	const changeDate = (event) => {
		const property = event.target.name;
		const value = date;
		setVacancyData({ ...vacancyData, [property]: value });
	};

	/**
	 *
	 * @param {Object} event Rewrite data of the Vacancy in an Object from Realtime Database
	 */
	const changeHandler = (event) => {
		const property = event.target.name;
		const value = event.target.value;
		setVacancyData({ ...vacancyData, [property]: value });
	};

	/**
	 *
	 * @param {Object} event Receive an Object
	 * @returns Write data in the Object of Firebase in Realtime Database
	 */
	const saveData = (event) => {
		event.preventDefault();
		return push(vacancyRef, vacancyData);
	};

	return (
		<TemplateLogged>
			<section className="flex justify-center flex-col items-center py-2 ml-auto mr-auto w-[95%] md:w-2/4 lg:w-3/5 ">
				<form
					className="w-full px-2 md:mr-4 md:p-6 rounded-md bg-[#022e5f21]"
					onSubmit={saveData}
				>
					<div className="flex justify-end">
						<InputDate on={changeDate} />
					</div>
					<InputForm label="Vacante" name="vacancyTitle" on={changeHandler} />
					<InputForm label="Área" name="areaVacancy" on={changeHandler} />
					<InputForm
						label="Categoría"
						name="categoryVacancy"
						on={changeHandler}
					/>
					<InputForm
						label="Subcategoría"
						name="subcategoryVacancy"
						on={changeHandler}
					/>
					<InputForm label="Salario" name="salaryVacancy" on={changeHandler} />
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
					<LabelForm label="Descripción" name="content" on={changeHandler} />

					<div>
						<button
							className="bg-[#1f82fc70] py-1 px-4 rounded-md font-semibold text-gray-100 hover:bg-[#1f82fcae] animate-pulse hover:animate-none"
							type="submit"
						>
							Create
						</button>
					</div>
				</form>
			</section>
		</TemplateLogged>
	);
}

export { Create };
