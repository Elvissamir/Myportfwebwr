import links from '../core/links';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MobileLink = () => {
    return ( 
        <a 
            href={links.github} 
            target='_blank' 
            rel="noreferrer" 
            className="menu-github">
            <FontAwesomeIcon className='menu-github-icon' icon={{ prefix: 'fab', iconName: 'github-square' }} />
        </a>
    );
}

export default MobileLink;