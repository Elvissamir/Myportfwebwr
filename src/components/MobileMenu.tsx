import links from '../core/links';

interface MobileMenuProps {
    onToggle: () => void
}

const MobileMenu = ({ onToggle }: MobileMenuProps) => {
    return ( 
        <div className="mobile-menu brand-bg brand-letter-light">
            <div className="mobile-content">
                <button onClick={onToggle} className="menu-btn">Menu</button>
                <div className="menu-line">|</div>
                <a 
                    href={links.github} 
                    target='_blank' 
                    rel="noreferrer" 
                    className="menu-github">Github</a>
            </div>
        </div>
    );
}

export default MobileMenu;