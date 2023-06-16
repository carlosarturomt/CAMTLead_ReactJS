import { useState } from "react";
import { ResizeApp } from "./test/ResizeApp";
import { Header } from "./views/Home/Header";
import { TemplateLogged } from "./templates/TemplateLogged";
import "./styles/App.css";
// import { NavBarLogged } from "./components/NavBar/NavBarLogged";

function App() {
	const [show, setShow] = useState(false);
	return (
		<>
			<TemplateLogged>
				{/* <NavBarLogged /> */}
				<Header />
				<button onClick={() => setShow(!show)}>Show/Hide</button>
				{show && <ResizeApp />}
			</TemplateLogged>
		</>
	);
}

export default App;
