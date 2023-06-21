import React from "react";
import { Link } from "react-router-dom";
import { TemplateLogged } from "../../templates/TemplateLogged";

function Profile() {
	return (
		<TemplateLogged>
			<section className="flex items-start flex-wrap justify-center w-full max-w-7xl mx-[auto] px-4 md:px-8 md:mb-36">
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
		</TemplateLogged>
	);
}

export { Profile };
