import { useState } from 'react'
import useWindowSize from '../../hooks/useWindowSize'
import BackgroundGrid from "./BackgroundGrid"
import Content from "./Content"
import Footer from "./Footer"
import Mobilebar from "./Mobilebar"
import MobileMenu from './MobileMenu'
import Navbar from "./Navbar"

const Layout = () => {
    const [ showMobileMenu, setShowMobileMenu ] = useState(false)
    const { width } = useWindowSize()

    const handleToggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu)
    }

    return (
        <div className="app-layout">
            <BackgroundGrid />
            <div className="layout-blocks">
                { width >= 1024 && <Navbar />}
                { width < 1024 && <MobileMenu showMobileMenu={showMobileMenu} />}
                { width < 1024 && <Mobilebar 
                    showMobileMenu={showMobileMenu}
                    toggleMobileMenu={handleToggleMobileMenu} />}
                <Content />
                <Footer />
            </div>
        </div>
    )
}

export default Layout