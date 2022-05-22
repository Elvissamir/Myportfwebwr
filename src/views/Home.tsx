import { useState } from 'react';
import Nav from '../components/Nav';
import MobileMenu from '../components/MobileMenu';

const Home = () => {
    const [showMobile, setShowMobile] = useState(true)
    const [showNav, setShowNav] = useState(false)

    const toggleNav = () => {
        setShowNav(!showNav)
    }

    return ( 
        <div className=' w-full min-h-screen relative'>
            <Nav show={showNav} />
            <MobileMenu onToggle={toggleNav} showingNav={showNav} />
        </div> 
    );
}

export default Home;