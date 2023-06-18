import React from "react";

function Header() {
	return (
		<>
			<header className="bg-stars">
				<aside className="radial-ellipse-far">
					<h1>HELLO :D</h1>
				</aside>
			</header>

			<style>
				{`
                    header {
                        background: #170325;
                    }
                    .bg-stars {
                        margin-top: -40px;

                            background-image: url('https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzMxMjNmMWQ0MjQ1ZmZhMGZmYWQ3NjcwNTRlNTBjODc2YjQ1M2JjMiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PXM/0MntFC3sWkoQLbXzak/giphy.gif');
                            background-position: center;
                            height: 100vh;
                            background-size: auto;
                            color: #fefefe;
                    }
                    section {
                        background: #25103d;
                        width: 100%;
                        height: 100vh;
                        z-index: 11 !important;
                        position: relative;
                    }
                    .radial-ellipse-far {
                        height: 100vh;
                        background: radial-gradient(ellipse farthest-corner at 50% 150%,#e7d1ff, #8844d4, #000000f5 100%);
                    }
                `}
			</style>
		</>
	);
}

export { Header };
