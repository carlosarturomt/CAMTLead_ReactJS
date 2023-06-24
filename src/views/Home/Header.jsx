import "./Header.css";

function Header() {
	return (
		<>
			<header className="mt-[-40px] text-gray-50">
				<aside className="gradient">
					<div className="p-3 h-screen flex items-center flex-col justify-center">
						<div className="flex flex-wrap px-4 w-10/12 mb-2 md:px-24  md:w-8/12 lg:w-7/12">
							<img
								src="./CAMTLead-C.svg"
								alt="Letter C"
								className="w-[40%] animate-LtoR"
							/>
							<div className="w-[60%] flex flex-wrap">
								<img
									src="./CAMTLead-A.svg"
									alt="Letter A"
									className="w-4/12 animate-BtoU"
								/>
								<img
									src="./CAMTLead-M.svg"
									alt="Letter M"
									className="w-4/12 animate-UtoB"
								/>
								<img
									src="./CAMTLead-T.svg"
									alt="Letter T"
									className="w-4/12 animate-RtoL"
								/>
								<img
									src="./CAMTLead-E.svg"
									alt="Letter E"
									className="w-4/12 animate-UtoB"
								/>
								<img
									src="./CAMTLead-A.svg"
									alt="Letter A"
									className="w-4/12 animate-BtoU"
								/>
								<img
									src="./CAMTLead-D.svg"
									alt="Letter D"
									className="w-4/12 animate-RtoL"
								/>
							</div>
						</div>
						<h1 className="text-4xl text-center animate-LtoR-nR">
							CAMT Lead, tú Sitio de Confianza
						</h1>
						<h2 className="flex items-center flex-wrap justify-center animate-RtoL-nR px-6 md:px-0">
							<span className="leading-5 text-1xl mr-1">¿en tu área de</span>
							<span className="leading-5 text-2xl font-bold">C</span>
							<span className="leading-5 text-1xl">onfort? </span>
							<span className="leading-5 text-2xl font-bold ml-1">A</span>
							<span className="leading-5 text-1xl">venturáte, y</span>
							<span className="leading-5 text-2xl font-bold ml-1">M</span>
							<span className="leading-5 text-1xl">
								uestrales que puedes. Seamos
							</span>
							<span className="leading-5 text-4xl font-bold ml-1"> + </span>
							<span className="leading-5 text-2xl font-bold ml-1">L</span>
							<span className="leading-5 text-1xl">íderes</span>
						</h2>
					</div>
				</aside>
			</header>
		</>
	);
}

export { Header };
