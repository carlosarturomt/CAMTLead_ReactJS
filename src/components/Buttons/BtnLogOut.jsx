import React from "react";
import { signOut, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function BtnLogOut() {
	const auth = getAuth();
	const navigate = useNavigate();

	const handleLogout = () => {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				navigate("/");
				console.log("Signed out successfully");
				window.location.reload();
			})
			.catch((error) => {
				// An error happened.
				console.log("error");
			});
	};

	return (
		<div className="flex justify-start w-full max-w-4xl">
			<button
				onClick={handleLogout}
				className="flex items-center text-3xl my-2 text-[#e7d1ff] material-symbols-outlined hover:animate-pulse btn-animate"
			>
				Logout <span className="text-xl pl-1">Logout</span>
			</button>
		</div>
	);
}

export { BtnLogOut };
