import React, { useState } from "react";
import { NavOpen } from "./NavOpen";

function NavBar(props) {
	const [isNavOpen, setIsNavOpen] = useState(false);

	return (
		<div className="pt-[40px] w-[full]">
			<nav className="ml-[2.5%] px-2 flex justify-start">
				<section
					className="fixed bg-transparent flex justify-between items-center rounded-full w-[60px] h-[60px] button-plus"
					onClick={() => setIsNavOpen((prev) => !prev)}
				>
					<span className="h-3 w-3 rounded-full animate-pulse bg-[#e7d1ff]"></span>
					<span className="h-3 w-3 rounded-full animate-pulse bg-[#8844d4]"></span>
					<span className="h-3 w-3 rounded-full animate-pulse bg-[#e7d1ff]"></span>
				</section>

				<section className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
					<div className="h-full">
						<header
							className="flex items-center justify-between px-2 bg-transparent"
							onClick={() => setIsNavOpen(false)}
						>
							<section
								className="flex justify-between items-center rounded-full w-[60px] h-[60px] bg-transparent"
								onClick={() => setIsNavOpen((prev) => !prev)}
							>
								<span className="h-3 w-3 rounded-full animate-pulse bg-[#e7d1ff]"></span>
								<span className="h-3 w-3 rounded-full animate-pulse bg-[#e7d1ff]"></span>
								<span className="h-3 w-3 rounded-full animate-pulse bg-[#e7d1ff]"></span>
							</section>
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
                        position: fixed;
                        width: 75px;
                        height: 90%;
                        top: 40px;
                        left: 2.5%;
                        background: #1b0d2abf;
                        z-index: 15;
                        border-radius: 15px;
                    }
                    .btn-stars {
                        background-image: url('https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzMxMjNmMWQ0MjQ1ZmZhMGZmYWQ3NjcwNTRlNTBjODc2YjQ1M2JjMiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PXM/0MntFC3sWkoQLbXzak/giphy.gif');
                        background-position: center;
                        background-size: auto;
                    }
                    .showMenuNav article a:hover {
                        -webkit-text-stroke: 2px #fefefe;
                        color: transparent;
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
