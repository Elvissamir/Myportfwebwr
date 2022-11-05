import BackgroundGrid from "./BackgroundGrid"
import Content from "./Content"
import Footer from "./Footer"
import Mobilebar from "./Mobilebar"
import Navbar from "./Navbar"

const Layout = () => {
    return (
        <div className="app-layout">
            <BackgroundGrid />
            <div className="layout-blocks">
                <Navbar />
                <Mobilebar />
                <Content />
                <Footer />
            </div>
        </div>
    )
}

export default Layout