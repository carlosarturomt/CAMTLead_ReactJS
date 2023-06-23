import "./Header.css";

function Header() {
	return (
		<>
			<header className="bg-stars">
				<aside className="gradient3">
					<div className="p-3 h-screen flex items-center flex-col justify-center">
						<div className="w-full flex flex-wrap px-24 md:w-7/12">
							<img src="./CAMTLead-C.svg" alt="Letter C" className="w-[40%]" />
							<div className="w-[60%] flex flex-wrap">
								<img src="./CAMTLead-A.svg" alt="Letter A" className="w-4/12" />
								<img src="./CAMTLead-M.svg" alt="Letter M" className="w-4/12" />
								<img src="./CAMTLead-T.svg" alt="Letter T" className="w-4/12" />
								<img src="./CAMTLead-E.svg" alt="Letter E" className="w-4/12" />
								<img src="./CAMTLead-A.svg" alt="Letter A" className="w-4/12" />
								<img src="./CAMTLead-D.svg" alt="Letter D" className="w-4/12" />
							</div>
						</div>
						<h1 className="text-4xl text-center">
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
