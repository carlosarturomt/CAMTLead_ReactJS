import { useState, useEffect } from "react";

function ResizeApp() {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const isMobile = windowWidth < 420;

	useEffect(() => {
		const handleResize = () => setWindowWidth(window.innerWidth);
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<>
			<h1 className={isMobile ? "text-red-500" : "text-blue-500"}>
				{windowWidth}
			</h1>
			{isMobile && <h2>Show only mobile device</h2>}
		</>
	);
}

export { ResizeApp };
