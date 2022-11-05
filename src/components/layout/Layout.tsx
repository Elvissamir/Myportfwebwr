import { useState } from 'react'
import BackgroundGrid from "./BackgroundGrid"
import Content from "./Content"
import Footer from "./Footer"
import Mobilebar from "./Mobilebar"
import Navbar from "./Navbar"

const Layout = () => {
    const [ showMobileMenu, setShowMobileMenu ] = useState(false)

    const handleToggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu)
    }

    return (
        <div className="app-layout">
            <BackgroundGrid />
            <div className="layout-blocks">
                <Navbar />
                <Mobilebar 
                    showMobileMenu={showMobileMenu}
                    toggleMobileMenu={handleToggleMobileMenu} />
                <Content />
                <Footer />
            </div>
        </div>
    )
}

export default Layout