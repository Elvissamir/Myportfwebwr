import Content from "./Content"
import Footer from "./Footer"
import Mobilebar from "./Mobilebar"
import Navbar from "./Navbar"

const Layout = () => {
    return (
        <div className="app-layout">
            <Navbar />
            <Mobilebar />
            <Content />
            <Footer />
        </div>
    )
}

export default Layout