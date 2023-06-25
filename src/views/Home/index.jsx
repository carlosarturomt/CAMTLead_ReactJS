import { HelmetProvider } from "react-helmet-async";
import { TemplateLogged } from "../../templates/TemplateLogged";
import { SEO } from "../../components/SEO";
import { Header } from "./Header";
import "./Header.css";

function Home() {
	return (
		<>
			<TemplateLogged>
				<HelmetProvider>
					<SEO
						title="CAMT Lead"
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
		</>
	);
}

export { Home };
