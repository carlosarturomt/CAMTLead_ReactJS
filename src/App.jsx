import { useState } from "react";
import { ResizeApp } from "./test/ResizeApp";
import { Header } from "./views/Home/Header";
import { TemplateLogged } from "./templates/TemplateLogged";
import "./styles/App.css";
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
	const [show, setShow] = useState(false);
	return (
		<>
			<HashRouter>
				<Routes>
					<Route
						path="/"
						element={
							<TemplateLogged>
								<Header />
								<button onClick={() => setShow(!show)}>Show/Hide</button>
								{show && <ResizeApp />}
							</TemplateLogged>
						}
					/>
				</Routes>
			</HashRouter>
		</>
	);
}

export default App;
