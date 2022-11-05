import MobileBtn from '../MobileBtn';
import MobileLink from '../MobileLink';

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
                    <div className='mobile-left-side'>
                        <MobileBtn onToggle={onToggle} showingNav={showingNav} />
                    </div>
                    <div className="menu-line">|</div>
                    <div className='mobile-right-side'>
                        <MobileLink />
                    </div>
                </div>
            </div>
        );
    }

    return <></>
}

export default MobileMenu;