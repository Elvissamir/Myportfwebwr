import Nav from '../components/Nav';
import MobileMenu from '../components/MobileMenu';
import useMenus from '../hooks/useMenus';
import useWindowSize from '../hooks/useWindowSize';

const Home = () => {
    const windowSize = useWindowSize()
    const { showNav, setShowNav, showMobile } = useMenus(windowSize)

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