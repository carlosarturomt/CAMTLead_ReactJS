import React from "react";
import { Helmet } from "react-helmet-async";
export default function Landing() {
	return (
		<div>
			<Helmet>
				<title>Learning React Helmet!</title>
				<meta
					name="description"
					content="Beginner friendly page for learning React Helmet."
				/>
			</Helmet>
			<h1>Cool Landing Page!</h1>
		</div>
	);
}
