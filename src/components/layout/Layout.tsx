import Content from "./Content"
import Footer from "./Footer"
import MobileMenu from "./MobileMenu"
import Navbar from "./Navbar"

const Layout = () => {
    return (
        <div className="app-layout">
            <Navbar />
            <MobileMenu />
            <Content />
            <Footer />
        </div>
    )
}

export default Layout