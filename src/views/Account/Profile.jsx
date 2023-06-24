import { Link } from "react-router-dom";
import { TemplateLogged } from "../../templates/TemplateLogged";
import { HelmetProvider } from "react-helmet-async";
import { SEO } from "../../components/SEO";
import { Logged } from "./Logged";

function Profile() {
	return (
		<Logged>
			<TemplateLogged>
				<HelmetProvider>
					<SEO
						title="CAMTLead | Profile Home"
						description="You are Logged, Congratulation to be part of this site :D"
						name="Carlos Arturo Miranda Trujano"
						type="article"
					/>
				</HelmetProvider>
				<section className="bg-transparent flex flex-col items-center px-5 mx-auto py-4 space-y-8 max-w-5xl h-screen">
					<h1 className="text-gray-100 text-4xl font-semibold w-full">
						Welcome Charly
					</h1>
					<article className="flex items-start justify-center flex-wrap w-full">
						<aside className="w-full py-4 px-2 md:p-6 rounded-md bg-[#022e5f21] text-gray-100 my-8 md:w-[49%] mr-[1%]">
							<h2 className="text-gray-100 text-2xl font-semibold">News</h2>

							<Link to={`news`}>
								<button className="bg-[#ffffff17] my-2 py-1 px-4 rounded-md font-semibold text-gray-100 hover:bg-[#3232328d] animate-pulse hover:animate-none">
									See more...
								</button>
							</Link>
						</aside>

						<aside className="w-full py-4 px-2 md:p-6 rounded-md bg-[#022e5f21] text-gray-100 my-8 md:w-[49%] mr-[1%]">
							<h2 className="text-gray-100 text-2xl font-semibold">Articles</h2>
							<Link to={`articles`}>
								<button className="bg-[#ffffff17] my-2 py-1 px-4 rounded-md font-semibold text-gray-100 hover:bg-[#3232328d] animate-pulse hover:animate-none">
									See more...
								</button>
							</Link>
						</aside>
					</article>
				</section>
				<style>
					{`
				section {
					position: initial;
				}
				`}
				</style>
			</TemplateLogged>
		</Logged>
	);
}

export { Profile };
