import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import links from '../core/links';

const NavIcon = () => {
    return ( 
        <>
            <a href={links.github} className='nav-github-link'>
                <FontAwesomeIcon className='nav-github-icon' icon={{ prefix: 'fab', iconName: 'github' }} />    
                <p className='nav-github-text'>Check my Github</p>
            </a>
        </>
    );
}

export default NavIcon;