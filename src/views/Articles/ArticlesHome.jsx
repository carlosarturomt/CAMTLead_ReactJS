//https://preview.colorlib.com/#endgam
import { HelmetProvider } from "react-helmet-async";
import { TemplateLogged } from "../../templates/TemplateLogged";
import { SEO } from "../../components/SEO";
// import { GetData } from "../Account/GetData";
import CarrouselTest from "../../components/Carrousel/indexTest";
// import Carrousel from "../../components/Carrousel";

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
				<CarrouselTest />
				{/* <GetData /> */}
			</TemplateLogged>
		</>
	);
}

export { ArticlesHome };
