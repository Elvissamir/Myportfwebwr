import Menu from "./Menu"

interface MobileMenuProps {
    showMobileMenu: boolean
}

const MobileMenu = ({ showMobileMenu }: MobileMenuProps) => {
    return (
        <div className="mobile-menu-container">
            <div className="mobile-menu">
                <Menu />
            </div>
        </div>
    )
}

export default MobileMenu