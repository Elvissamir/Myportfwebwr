import ECLogo from "../ECLogo"
import Menu from "./Menu"

const Navbar = () => {
    return (
        <div className="navbar-container">
            <nav className="navbar x-container">
                <div className="left">
                    <ECLogo />
                </div>
                <div className="right">
                    <Menu />
                </div>
            </nav>
        </div>
    )
}

export default Navbar