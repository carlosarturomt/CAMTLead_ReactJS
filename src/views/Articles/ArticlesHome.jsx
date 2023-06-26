//https://preview.colorlib.com/#endgam
import { HelmetProvider } from "react-helmet-async";
import { TemplateLogged } from "../../templates/TemplateLogged";
import { SEO } from "../../components/SEO";
import { GetData } from "../Account/GetData";
// import CarrouselTest from "../../components/Carrousel/indexTest";
// import Carrousel from "../../components/Carrousel";
import GlideTest from "../../components/Carrousel/GlideTest";

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
				{/* <Carrousel /> */}
				{/* <CarrouselTest /> */}
				<GlideTest />
				{/* <GetData /> */}
			</TemplateLogged>
		</>
	);
}

export { ArticlesHome };
