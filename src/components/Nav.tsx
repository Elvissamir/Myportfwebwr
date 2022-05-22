import sections from '../core/sections';
import NavLink from './NavLink';
import NavIcon from './NavIcon';

interface NavProps {
    show: boolean
}

const Nav = ({ show }: NavProps) => {
    return (
        <nav className={show? 'nav-active nav brand-bg':'nav-hide nav brand-bg'}>
            <div className="nav-content-wrapper">
                <div className="nav-github-container">
                    <NavIcon />
                </div>    
                <div className='nav-links-wrapper'>
                    <NavLink sectionsInfo={sections} />
                </div>
            </div>
        </nav>
    )
}

export default Nav;