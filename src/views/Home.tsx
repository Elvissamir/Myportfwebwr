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
            <main className='main'>
                <div className='sections-wrapper'>
                    <section className='section'>
                        <p>Start</p>
                    </section>
                    <section className='section'>
                        <p>Skills</p>
                    </section>
                    <section className='section'>
                        <p>Projects</p>
                    </section>
                    <section className='section'>
                        <p>Education</p>
                    </section>
                    <section className='section'>
                        <p>Hire Me</p>
                    </section>
                    <section className='section'>
                        <p>Contact Me</p>
                    </section>
                    <section className='section'>
                        <p>About Me</p>
                    </section>
                </div>
            </main>
        </div> 
    );
}

export default Home;