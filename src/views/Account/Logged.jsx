import { useState, useEffect } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { CreateFirestore } from "./CreateFirestore";
import { Error404 } from "../Error";

function Logged(props) {
	const [log, setLog] = useState(false);
	const auth = getAuth();

	if (
		useEffect(() => {
			onAuthStateChanged(auth, (user) => {
				if (
					user.email == "carlosarturomt@gmail.com" ||
					user.email == "amiranda@btcamericas.com"
				) {
					console.log("Panel de 'Update'");
					// console.log("Welcome", user.email);
					setLog(true);
				} else {
					setLog(false);
				}
			});
		})
	) {
	}

	return <div>{log ? props.children : <Error404 />}</div>;
}

export { Logged };
