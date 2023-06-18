import React from "react";
import { NavLink } from "react-router-dom";

function NavOpen(props) {
	return (
		<div className="px-2">
			<aside>
				<ul className="flex flex-col justify-between text-gray-100 mb-8">
					<img
						src="../../../public/logoCAMTLed.svg"
						alt="logo CAMT Lead"
						className="py-4"
					/>

					<span className="flex justify-center items-center text-3xl material-symbols-outlined">
						search
					</span>
					<h5 className="uppercase text-center w-full font-semibold py-4">
						MENÚ
					</h5>

					<NavLink
						to="/contact"
						className="text-2xl lg:my-1 lg:text-3xl btn-animate w-fit"
					>
						Contact
					</NavLink>
				</ul>
				<ul className="flex flex-col justify-between text-gray-100 mb-8">
					<h5 className="uppercase text-center w-full font-semibold">MENÚ</h5>
					{props.children}
					<NavLink to="/careers" className="text-2xl lg:my-1 btn-animate w-fit">
						Apply
					</NavLink>
				</ul>

				{/* <aside className="px-8 text-gray-100 mb-8">
					<h5 className="uppercase text-1xl border-b font-semibold">
						Social Media
					</h5>
					<ul className="text-gray-100 pr-6">
						<li className="text-2xl lg:my-1 lg:text-3xl ">
							<a
								href="https://www.facebook.com/BTCamericas"
								className="pr-10 btn-animate"
							>
								<span>Facebook</span>
							</a>
						</li>
						<li className="text-2xl lg:my-1 lg:text-3xl ">
							<a
								href="https://www.instagram.com/btcamericas/"
								className="pr-10 btn-animate"
							>
								<span>Instagram</span>
							</a>
						</li>
						<li className="text-2xl lg:my-1 lg:text-3xl ">
							<a
								href="https://twitter.com/BTCamericas"
								className="pr-10 btn-animate"
							>
								<span>Twitter</span>
							</a>
						</li>
						<li className="text-2xl lg:my-1 lg:text-3xl ">
							<a
								href="https://www.linkedin.com/company/btcamericas"
								className="pr-10 btn-animate"
							>
								<span>LinkedIn</span>
							</a>
						</li>
					</ul>
				</aside> */}

				<ul className="flex flex-col justify-between text-gray-100 mb-16">
					<h5 className="uppercase text-1xl border-b font-semibold">
						Contact Us
					</h5>
					<NavLink
						to="/contact"
						className="text-2xl lg:my-1 lg:text-3xl btn-animate w-fit"
					>
						Contact
					</NavLink>
				</ul>
			</aside>
		</div>
	);
}

export { NavOpen };
