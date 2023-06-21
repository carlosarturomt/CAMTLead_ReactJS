import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { BtnLogOut } from "../Buttons/BtnLogOut";
import { onAuthStateChanged, getAuth } from "firebase/auth";

function NavOpen(props) {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const [log, setLog] = useState(false);
	const auth = getAuth();

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user == null) {
				console.log("User is Null x2 😢");
			} else if (user.email) {
				setLog(true);
			} else {
				setLog(false);
			}
		});
	});

	return (
		<div
			className="px-2"
			onMouseEnter={() => setIsNavOpen((prev) => !prev)}
			onMouseLeave={() => setIsNavOpen(false)}
		>
			<aside>
				<ul className="flex flex-col justify-between text-gray-100 mb-4">
					<img src="/logoCAMTLed.svg" alt="logo CAMT Lead" className="py-4" />

					<span className="flex justify-center items-center text-3xl text-[#e7d1ff] material-symbols-outlined">
						search
					</span>
					<h5 className="uppercase text-center w-full font-semibold py-3 text-[#e7d1ff] ">
						MENÚ
					</h5>
					<NavLink
						to="/"
						className="flex justify-center items-center text-3xl py-2 text-[#e7d1ff] material-symbols-outlined hover:animate-pulse"
					>
						home
					</NavLink>
					<NavLink
						to="/about"
						className="flex justify-center items-center text-3xl py-2 text-[#e7d1ff] material-symbols-outlined hover:animate-pulse"
					>
						explore
					</NavLink>
					<NavLink
						to="/discover"
						className="flex justify-center items-center text-3xl py-2 text-[#e7d1ff] material-symbols-outlined hover:animate-pulse"
					>
						signpost
					</NavLink>
					<NavLink
						to="/news"
						className="flex justify-center items-center text-3xl py-2 text-[#e7d1ff] material-symbols-outlined hover:animate-pulse"
					>
						news
					</NavLink>
					<NavLink
						to="/academic"
						className="flex justify-center items-center text-3xl py-2 text-[#e7d1ff] material-symbols-outlined hover:animate-pulse"
					>
						history_edu
					</NavLink>
					<NavLink
						to="/loyalty"
						className="flex justify-center items-center text-3xl py-2 text-[#e7d1ff] material-symbols-outlined hover:animate-pulse"
					>
						loyalty
					</NavLink>
				</ul>
				<ul className="flex flex-col justify-between text-gray-100 mb-8 ">
					{props.children}
				</ul>

				<section className={isNavOpen ? "showMenu" : "hideMenuNav"}>
					<div className="h-full">
						<header className="flex items-center justify-between px-2 bg-transparent">
							<section className="flex justify-between items-center rounded-full w-[60px] h-[60px] bg-transparent">
								<span className="h-3 w-3 rounded-full animate-pulse bg-[#e7d1ff]"></span>
								<span className="h-3 w-3 rounded-full animate-pulse bg-[#e7d1ff]"></span>
								<span className="h-3 w-3 rounded-full animate-pulse bg-[#e7d1ff]"></span>
							</section>
						</header>
						<div className="mx-2">
							<NavLink to="/" className="flex items-center hover:animate-pulse">
								<img
									src="/logoCAMTLed.svg"
									alt="logo CAMT Lead"
									className="py-4 w-[60px]"
								/>
								<h1 className="text-lg text-[#e7d1ff]">CAMTLead</h1>
							</NavLink>
						</div>
						<div className="mx-3">
							<div className=" flex  rounded-lg bg-[#820eff25] items-center p-2  hover:animate-pulse">
								<span className="material-symbols-outlined text-[#e7d1ff]">
									search
								</span>
								<input
									placeholder="Search... &#8617;"
									className="bg-transparent w-full focus:outline-none border-none text-[#e7d1ff]"
									type="search"
								/>
							</div>
							<h5 className="uppercase w-full font-semibold py-3 text-[#e7d1ff] ">
								MENÚ
							</h5>
						</div>

						<ul className="flex flex-col justify-between text-gray-100 mb-4 mx-5">
							<NavLink
								to="/"
								className="flex items-center text-3xl my-2 text-[#e7d1ff] material-symbols-outlined hover:animate-pulse btn-animate"
							>
								home <span className="text-xl pl-1">Home</span>
							</NavLink>
							<NavLink
								to="/about"
								className="flex items-center text-3xl my-2 text-[#e7d1ff] material-symbols-outlined hover:animate-pulse btn-animate"
							>
								explore <span className="text-xl pl-1">About</span>
							</NavLink>
							<NavLink
								to="/discover"
								className="flex items-center text-3xl my-2 text-[#e7d1ff] material-symbols-outlined hover:animate-pulse btn-animate"
							>
								signpost <span className="text-xl pl-1">Discover</span>
							</NavLink>
							<NavLink
								to="/news"
								className="flex items-center text-3xl my-2 text-[#e7d1ff] material-symbols-outlined hover:animate-pulse btn-animate"
							>
								news <span className="text-xl pl-1">News</span>
							</NavLink>
							<NavLink
								to="/academic"
								className="flex items-center text-3xl my-2 text-[#e7d1ff] material-symbols-outlined hover:animate-pulse btn-animate"
							>
								history_edu <span className="text-xl pl-1">Articles</span>
							</NavLink>
							<NavLink
								to="/loyalty"
								className="flex items-center text-3xl my-2 text-[#e7d1ff] material-symbols-outlined hover:animate-pulse btn-animate"
							>
								loyalty <span className="text-xl pl-1">Promote </span>
							</NavLink>
						</ul>
						<ul className="flex flex-col justify-between text-gray-100 mb-4 mx-5 border-t-2 border-[#e7d1ff]">
							{log ? (
								<>
									<NavLink
										to="/account"
										className="flex items-center text-3xl my-2 text-[#e7d1ff] material-symbols-outlined hover:animate-pulse btn-animate"
									>
										account_circle <span className="text-xl pl-1">Account</span>
									</NavLink>

									<BtnLogOut />
								</>
							) : (
								<NavLink
									to="/login"
									className="flex items-center text-3xl my-2 text-[#e7d1ff] material-symbols-outlined hover:animate-pulse btn-animate"
								>
									Login
									<span
										id="log"
										className="my-3 text-xl pl-1 text-[#e7d1ff] z-20"
									>
										Login
									</span>
								</NavLink>
							)}
						</ul>
					</div>
				</section>
			</aside>
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
                    .showMenu {
                        position: fixed;
                        width: 180px;
                        height: 90%;
                        top: 40px;
                        left: 2.5%;
                        z-index: 15;
                        border-radius: 15px;
						background-color: #1b0d2a;
                    }
                    .btn-stars {
                        background-image: url('https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzMxMjNmMWQ0MjQ1ZmZhMGZmYWQ3NjcwNTRlNTBjODc2YjQ1M2JjMiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PXM/0MntFC3sWkoQLbXzak/giphy.gif');
                        background-position: center;
                        background-size: auto;
                    }
                    .showMenu article a:hover {
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

export { NavOpen };
