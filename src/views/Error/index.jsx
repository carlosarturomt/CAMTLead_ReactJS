import React from "react";
import { TemplateLogged } from "../../templates/TemplateLogged";
import { HelmetProvider } from "react-helmet-async";
import { SEO } from "../../components/SEO";

function Error404() {
	return (
		<TemplateLogged>
			<HelmetProvider>
				<SEO
					title="Ups!"
					description=" We don´t find this page :("
					name="Company name."
					type="article"
				/>
			</HelmetProvider>
			<section className="flex flex-col items-center justify-center px-5 mx-auto my-28 py-1 space-y-8 text-center sm:max-w-md">
				<h2 className="mb-8 font-extrabold text-9xl text-gray-300 animate-pulse">
					<span className="sr-only">Error</span>404
				</h2>
				<p className="text-3xl text-gray-300 animate-pulse">
					Looks like this page are currently offline for you
				</p>
				<a
					rel="noopener noreferrer"
					href="/"
					className="px-8 py-3 font-semibold rounded text-gray-400 border rounded-xl hover:text-gray-100 "
				>
					Back to Homepage
				</a>
			</section>
		</TemplateLogged>
	);
}

export { Error404 };
