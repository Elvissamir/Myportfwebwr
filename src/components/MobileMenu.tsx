import MobileBtn from './MobileBtn';
import MobileLink from './MobileLink';

interface MobileMenuProps {
    onToggle: () => void
}

const MobileMenu = ({ onToggle }: MobileMenuProps) => {
    return (
        <div className="mobile-menu brand-bg brand-letter-light">
            <div className="mobile-content">
                <MobileBtn onToggle={onToggle} />
                <div className="menu-line">|</div>
                <MobileLink />
            </div>
        </div>
    );
}

export default MobileMenu;