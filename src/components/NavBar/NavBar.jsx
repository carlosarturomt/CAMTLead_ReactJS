import React, { useState } from "react";
// import { Logo } from "./Logo";
import { NavOpen } from "./NavOpen";
// import btcLogo from "../../assets/react.svg";

function NavBar(props) {
	const [isNavOpen, setIsNavOpen] = useState(false);

	return (
		<div className="flex items-center justify-between py-8 px-8 lg:px-40 w-full">
			{/* <Logo image={btcLogo} /> */}
			<nav className="flex">
				<section
					className="bg-transparent flex justify-between items-center rounded-full p-5 h-[60px] button-plus"
					onClick={() => setIsNavOpen((prev) => !prev)}
				>
					<span className="h-3 w-3 rounded-full animate-pulse bg-[#e7d1ff]"></span>
					<span className="h-3 w-3 rounded-full animate-pulse bg-[#8844d4]"></span>
					<span className="h-3 w-3 rounded-full animate-pulse bg-[#e7d1ff]"></span>
				</section>

				<section className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
					<div className="h-full">
						<header
							className="flex items-center justify-between py-8 px-8 lg:px-40 mb-8"
							onClick={() => setIsNavOpen(false)}
						>
							{/* <Logo image={btcLogo} classLogo="text-gray-100" logo="btc" /> */}
							<div
								className="flex flex-col justify-center items-center space-y-1 bg-red-600 rounded-full p-5 w-[60px] h-[60px] button-plus-active button-plus"
								onClick={() => setIsNavOpen((prev) => !prev)}
							>
								<span className="block h-1 w-4 animate-pulse rotate-90 bg-gray-100"></span>
								<span className="block h-1 w-8 animate-pulse bg-gray-100"></span>
								<span className="block h-1 w-4 animate-pulse rotate-90 bg-gray-100"></span>
							</div>
						</header>
						<NavOpen>{props.children}</NavOpen>
					</div>
				</section>
			</nav>

			<style>
				{`
                    nav {
                        width: 99.4px;
                        display: flex;
                        justify-content: flex-end;
                    }
                    .hideMenuNav {
                        display: none;
                    }
                    .showMenuNav {
                        display: block;
                        position: fixed;
                        width: 100%;
                        height: 100vh;
                        top: 0;
                        left: 0;
                        background: #000c1a;
                        z-index: 15;
                        overflow-y: scroll;
                    }
                    .showMenuNav article a:hover {
                        -webkit-text-stroke: 2px #fefefe;
                        color: transparent;
                    }
                    .button-plus-active {
                        animation-name: resplandorAnimation;
                        transform: rotate(45deg);
                        animation-duration:  1s;
                        animation-iteration-count: infinite;
                    }

                    .button-plus:hover {
                        animation-name: resplandorAnimation, rotation;
                        animation-duration:  1s, 0.5s;
                        animation-iteration-count: infinite, 1;
                    }
                    @keyframes rotation {
                        from {
                            transform: rotate(0deg);
                        }
                        to {
                            transform: rotate(360deg);
                        }
                    }

                `}
			</style>
		</div>
	);
}

export { NavBar };
