import useWindowSize from '../hooks/useWindowSize';
import useMenus from '../hooks/useMenus';
import MobileMenu from './layout/MobileMenu';
import Nav from './layout/Nav';

const Menus = () => {
    const windowSize = useWindowSize()
    const { showNav, setShowNav, showMobile } = useMenus(windowSize)

    const toggleNav = () => {
        setShowNav(!showNav)
    }

    return ( 
        <>
            <Nav show={showNav} />
            <MobileMenu 
                show={showMobile}
                onToggle={toggleNav} 
                showingNav={showNav} />
        </>
    );
}

export default Menus;