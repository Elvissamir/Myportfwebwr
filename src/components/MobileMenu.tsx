import links from '../core/links';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MobileBtn from './MobileBtn';

interface MobileMenuProps {
    onToggle: () => void
}

const MobileMenu = ({ onToggle }: MobileMenuProps) => {
    return (
        <div className="mobile-menu brand-bg brand-letter-light">
            <div className="mobile-content">
                <MobileBtn onToggle={onToggle} />
                <div className="menu-line">|</div>
                <a 
                    href={links.github} 
                    target='_blank' 
                    rel="noreferrer" 
                    className="menu-github">

                    <FontAwesomeIcon className='menu-github-icon' icon={{ prefix: 'fab', iconName: 'github-square' }} />
                </a>
            </div>
        </div>
    );
}

export default MobileMenu;