import React from "react";
import { NavBarLogged } from "../components/NavBar/NavBarLogged";

function TemplateLogged(props) {
	return (
		<div>
			<NavBarLogged />
			{props.children}
		</div>
	);
}

export { TemplateLogged };
