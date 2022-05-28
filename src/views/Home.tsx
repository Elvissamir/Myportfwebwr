import Nav from '../components/Nav';
import MobileMenu from '../components/MobileMenu';
import useMenus from '../hooks/useMenus';
import useWindowSize from '../hooks/useWindowSize';
import Sections from '../components/Sections';

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
            <main className='main'>
                <Sections /> 
            </main>
        </div> 
    );
}

export default Home;