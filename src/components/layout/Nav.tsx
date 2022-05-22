import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import links from '../../core/links';
import sections from '../../core/sections';
import NavLink from '../NavLink';

const Nav = () => {
    return (
        <nav className="fixed z-[2000] w-full">
            <div className="flex">
                <div className="flex flex-col">
                    <a href={links.github}>
                        <FontAwesomeIcon className='text-5xl' icon={{ prefix: 'fab', iconName: 'github' }} />    
                        <p className='text-lg font-black'>Check my Github</p>
                    </a>
                </div>    
                <div className='flex flex-col justify-center items-center mt-3 w-6/12 mx-auto'>
                    <NavLink sectionsInfo={sections} />
                </div>
            </div>
        </nav>
    )
}

export default Nav;