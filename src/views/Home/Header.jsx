import "./Header.css";

function Header() {
	return (
		<>
			<header className="bg-stars">
				<aside className="gradient3">
					<div className="p-3 h-screen flex items-center flex-col">
						<img
							src="./CAMTLead-txt-full.svg"
							alt="logo CAMT Lead"
							className="w-[600px]"
						/>
						<h1 className="mt-[-90px] md:mt-[-145px] text-4xl text-center">
							CAMT Lead, tú Sitio de Confianza
						</h1>
						<h2 className="flex items-center flex-wrap justify-center">
							<span className="text-1xl font-bold mr-1">¿en tu área</span>
							<span className="text-2xl font-bold">C</span>
							<span className="text-1xl font-bold">onfort? </span>
							<span className="text-2xl font-bold ml-1">A</span>
							<span className="text-1xl font-bold">venturáte, y</span>
							<span className="text-2xl font-bold ml-1">M</span>
							<span className="text-1xl font-bold">
								uestrales que puedes. Seamos
							</span>
							<span className="text-3xl font-bold ml-1"> + </span>
							<span className="text-2xl font-bold ml-1">L</span>
							<span className="text-1xl font-bold">íderes</span>
						</h2>
					</div>
				</aside>
			</header>
		</>
	);
}

export { Header };
