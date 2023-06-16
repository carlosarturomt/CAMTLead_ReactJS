import React from "react";
import App from "./App";
import firebaseConfig from "./config/firebase-config";
import { FirebaseAppProvider } from "reactfire";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import "./styles/App.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<FirebaseAppProvider firebaseConfig={firebaseConfig}>
			<App />
		</FirebaseAppProvider>
	</React.StrictMode>
);
