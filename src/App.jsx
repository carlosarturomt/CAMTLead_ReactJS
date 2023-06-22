import { useState } from "react";
import { ResizeApp } from "./test/ResizeApp";
import { Header } from "./views/Home/Header";
import { TemplateLogged } from "./templates/TemplateLogged";
import "./styles/App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Error404 } from "./views/Error";
import { Login } from "./views/Log/Login";
import { Profile } from "./views/Account/Profile";
// import { Create } from "./views/Account/Create";
import { CreateFirestore } from "./views/Account/CreateFirestore";
import { HelmetProvider } from "react-helmet-async";
import { SEO } from "./components/SEO";

function App() {
	const [show, setShow] = useState(false);
	const helmetContext = {};
	return (
		<>
			<HashRouter>
				<Routes>
					<Route
						path="/"
						element={
							<TemplateLogged>
								<HelmetProvider>
									<SEO
										title="CAMTLead | Home"
										description="¡This is the Version Number Two of the Page 'Profesionistas de Texcoco'!"
										name="Carlos Arturo Miranda Trujano"
										type="article"
									/>
								</HelmetProvider>
								<Header />
								<button onClick={() => setShow(!show)}>Show/Hide</button>
								{show && <ResizeApp />}
							</TemplateLogged>
						}
					/>

					<Route path="/login" element={<Login />} />

					<Route path="/account" element={<Profile />} />
					<Route path="/account/articles" element={<CreateFirestore />} />

					<Route path="*" element={<Error404 />} />
				</Routes>
			</HashRouter>
		</>
	);
}

export default App;
