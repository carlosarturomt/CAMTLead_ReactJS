import { Header } from "./views/Home/Header";
import { TemplateLogged } from "./templates/TemplateLogged";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Error404 } from "./views/Error";
import { Login } from "./views/Log/Login";
import { Profile } from "./views/Account/Profile";
import { HelmetProvider } from "react-helmet-async";
import { SEO } from "./components/SEO";
import "./styles/App.css";
import { Logged } from "./views/Account/Logged";
import { CreateFirestore } from "./views/Account/CreateFirestore";

function App() {
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

					<Route
						path="/account"
						element={
							<Logged>
								<Profile />
							</Logged>
						}
					/>
					<Route
						path="/account/articles"
						element={
							<Logged>
								<CreateFirestore />
							</Logged>
						}
					/>

					<Route path="*" element={<Error404 />} />
				</Routes>
			</HashRouter>
		</>
	);
}

export default App;
