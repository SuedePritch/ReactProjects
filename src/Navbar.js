const Navbar = () => {
    return (
		<nav className="navbar">
			<h1 className="mainTitle">The Blog</h1>
			<div className="links">
				<a href="/">Home </a>
				<a href="/create">New Blog </a>
			</div>
		</nav>
    );
}

export default Navbar;