import MobileBtn from './MobileBtn';
import MobileLink from './MobileLink';

interface MobileMenuProps {
    show: boolean,
    showingNav: boolean,
    onToggle: () => void,
}

const MobileMenu = ({ onToggle, showingNav, show }: MobileMenuProps) => {
    if (show) {
        return (
            <div className="mobile-menu brand-bg brand-letter-light">
                <div className="mobile-content">
                    <MobileBtn onToggle={onToggle} showingNav={showingNav} />
                    <div className="menu-line">|</div>
                    <MobileLink />
                </div>
            </div>
        );
    }

    return <></>
}

export default MobileMenu;