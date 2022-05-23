import { useState } from 'react';
import Nav from '../components/Nav';
import MobileMenu from '../components/MobileMenu';
import useWindowSize from '../hooks/useWindowSize';
import { useEffect } from 'react';

const Home = () => {
    const [showMobile, setShowMobile] = useState(true)
    const [showNav, setShowNav] = useState(false)
    const windowWidth = useWindowSize()

    useEffect(() => {
        if (windowWidth >= 1024) {
            setShowNav(true)
            setShowMobile(false)
        }
        else {
            setShowMobile(true)
        }
    }, [windowWidth])

    const toggleNav = () => {
        setShowNav(!showNav)
    }

    return ( 
        <div className=' w-full min-h-screen relative'>
            <Nav show={showNav} />
            <MobileMenu 
                show={showMobile}
                onToggle={toggleNav} 
                showingNav={showNav} />
        </div> 
    );
}

export default Home;