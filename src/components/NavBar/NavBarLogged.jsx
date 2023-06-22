import { useState, useEffect } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { NavBar } from "./NavBar";
import { NavLink } from "react-router-dom";

function NavBarLogged() {
	const [log, setLog] = useState(false);
	const auth = getAuth();

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user == null) {
				console.log("User is Null :(");
			} else if (user.email) {
				setLog(true);
			} else {
				setLog(false);
			}
		});
	});

	return (
		<>
			{log ? (
				<NavBar>
					{
						<div className="border-t-2 border-[#e7d1ff]">
							<NavLink
								to="/account"
								className="flex justify-center items-center text-3xl my-2 text-[#e7d1ff] material-symbols-outlined hover:animate-pulse btn-animate"
							>
								account_circle
							</NavLink>
							<NavLink
								to="/"
								className="flex justify-center items-center text-3xl my-2 text-[#e7d1ff] material-symbols-outlined hover:animate-pulse btn-animate"
							>
								Logout
							</NavLink>
						</div>
					}
				</NavBar>
			) : (
				<NavBar>
					{
						<div className="border-t-2 border-[#e7d1ff]">
							<NavLink
								to="/login"
								className="flex justify-center items-center text-3xl my-2 text-[#e7d1ff] material-symbols-outlined hover:animate-pulse"
							>
								Login
							</NavLink>
						</div>
					}
				</NavBar>
			)}
		</>
	);
}
export { NavBarLogged };
