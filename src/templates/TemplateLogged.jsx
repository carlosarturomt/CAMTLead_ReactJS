import { NavBarLogged } from "../components/NavBar/NavBarLogged";

function TemplateLogged(props) {
	return (
		<div className="bg-[#140425] relative">
			<NavBarLogged />
			{props.children}
		</div>
	);
}

export { TemplateLogged };
