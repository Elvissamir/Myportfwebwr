import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import links from '../../core/links';
import sections from '../../core/sections';
import NavLink from '../NavLink';

const Nav = () => {
    return (
        <nav className="nav brand-bg">
            <div className="nav-content-wrapper custom-padding">
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