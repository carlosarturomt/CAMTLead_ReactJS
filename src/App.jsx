import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./views/Home";
import { Error404 } from "./views/Error";
import { Login } from "./views/Log/Login";
import { ArticlesHome } from "./views/Articles/ArticlesHome";
import { Profile } from "./views/Account/Profile";
import { CreateFirestore } from "./views/Account/CreateFirestore";
import "./styles/App.css";

function App() {
	return (
		<>
			<HashRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/articles" element={<ArticlesHome />} />
					<Route path="/login" element={<Login />} />
					{/* <Route path="/about" element={<Carrousel />} /> */}
					<Route path="/account" element={<Profile />} />
					<Route path="/account/articles" element={<CreateFirestore />} />
					<Route path="*" element={<Error404 />} />
				</Routes>
			</HashRouter>
		</>
	);
}

export default App;
