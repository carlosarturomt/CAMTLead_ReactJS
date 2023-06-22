import { useState } from "react";
import { Header } from "./views/Home/Header";
import { TemplateLogged } from "./templates/TemplateLogged";
import "./styles/App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Error404 } from "./views/Error";
import { Login } from "./views/Log/Login";
import { Profile } from "./views/Account/Profile";
import { CreateFirestore } from "./views/Account/CreateFirestore";
import { HelmetProvider } from "react-helmet-async";
import { SEO } from "./components/SEO";

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
								<HelmetProvider>
									<SEO
										title="CAMTLead | Home"
										description="¡This is the Version Number Two of the Page 'Profesionistas de Texcoco'!"
										name="Carlos Arturo Miranda Trujano"
										type="article"
									/>
								</HelmetProvider>
								<Header />
								<h1 className="bg-[#140425] h-screen text-gray-50 text-center text-6xl">
									Add the variable font
								</h1>
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
