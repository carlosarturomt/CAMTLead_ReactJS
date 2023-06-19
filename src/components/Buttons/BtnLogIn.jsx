import React from "react";
import { NavLink } from "react-router-dom";

function BtnLogIn() {
	return (
		<>
			<NavLink
				to="/login"
				className="w-fit border-t-2 border-[#e7d1ff] flex justify-center items-center text-3xl py-2 px-4 text-[#e7d1ff] material-symbols-outlined hover:animate-pulse"
			>
				Login
			</NavLink>
			{/* <NavLink
				to="/signup"
				className="text-2xl lg:my-1 lg:text-3xl btn-animate w-fit"
			>
				Sign Up
			</NavLink> */}
		</>
	);
}

export { BtnLogIn };
