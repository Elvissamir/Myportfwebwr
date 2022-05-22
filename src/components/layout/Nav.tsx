import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import links from '../../core/links';
import sections from '../../core/sections';
import NavLink from '../NavLink';

const Nav = () => {
    return (
        <nav className="fixed z-[2000] w-full h-full brand-bg flex">
            <div className="flex flex-col justify-center w-6/12 mx-auto custom-padding">
                <div className="flex flex-col justify-center items-center">
                    <a href={links.github} className='flex flex-col justify-center'>
                        <FontAwesomeIcon className='text-5xl' icon={{ prefix: 'fab', iconName: 'github' }} />    
                        <p className='text-lg font-black'>Check my Github</p>
                    </a>
                </div>    
                <div className='flex flex-col justify-center items-center'>
                    <NavLink sectionsInfo={sections} />
                </div>
            </div>
        </nav>
    )
}

export default Nav;