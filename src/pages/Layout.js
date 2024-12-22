import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav className="navbar">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cv">CV</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cardgame">Card Game</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;