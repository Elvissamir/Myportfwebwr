import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import links from '../core/links';
import sections from '../core/sections';
import NavLink from './NavLink';

interface NavProps {
    show: boolean
}

const Nav = ({ show }: NavProps) => {
    return (
        <nav className={show? 'nav-active nav brand-bg':'nav-hide nav brand-bg'}>
            <div className="nav-content-wrapper">
                <div className="nav-github-container">
                    <a href={links.github} className='nav-github-link'>
                        <FontAwesomeIcon className='nav-github-icon' icon={{ prefix: 'fab', iconName: 'github' }} />    
                        <p className='nav-github-text'>Check my Github</p>
                    </a>
                </div>    
                <div className='nav-links-wrapper'>
                    <NavLink sectionsInfo={sections} />
                </div>
            </div>
        </nav>
    )
}

export default Nav;