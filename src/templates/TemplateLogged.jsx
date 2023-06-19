import React from "react";
import { NavBarLogged } from "../components/NavBar/NavBarLogged";

function TemplateLogged(props) {
	return (
		<div className="bg-[#820effec] h-[100vh]">
			<NavBarLogged />
			{props.children}
		</div>
	);
}

export { TemplateLogged };
