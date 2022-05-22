import links from '../core/links';

const MobileMenu = () => {
    return ( 
        <div className="mobile-menu brand-bg brand-letter-light">
            <div className="mobile-content">
                <button className="menu-btn">Menu</button>
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