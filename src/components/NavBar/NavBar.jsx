import { useState } from "react";
import { NavOpen } from "./NavOpen";
import "./NavBar.css";

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
		</div>
	);
}

export { NavBar };
