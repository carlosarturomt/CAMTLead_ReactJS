//https://preview.colorlib.com/#endgam
import { HelmetProvider } from "react-helmet-async";
import { TemplateLogged } from "../../templates/TemplateLogged";
import { SEO } from "../../components/SEO";
import { GetData } from "../Account/GetData";
import Carrousel from "../../components/Carrousel";

function ArticlesHome() {
	return (
		<>
			<TemplateLogged>
				<HelmetProvider>
					<SEO
						title="CAMTLead | Articles"
						description="In this page you can found some articles to learn a little of some categories."
						name="Carlos Arturo Miranda Trujano"
						type="article"
					/>
				</HelmetProvider>
				<Carrousel />
				{/* <header className="mt-[-40px] text-gray-50">
					<aside className="gradient">
						<div className="p-3 h-screen flex items-center flex-col justify-center">
							<h1 className="text-8xl font-semibold animate-LtoR">
								🛠️ Articles
							</h1>
							<h2 className="text-5xl animate-RtoL">In Construction</h2>
						</div>
					</aside>
				</header> */}
				<GetData />
			</TemplateLogged>
		</>
	);
}

export { ArticlesHome };
