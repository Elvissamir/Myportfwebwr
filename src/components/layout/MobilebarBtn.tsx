interface MobilebarBtnProps {
    showMobileMenu: boolean
    toggleMobileMenu: () => void
}

const MobilebarBtn = ({ showMobileMenu, toggleMobileMenu }: MobilebarBtnProps) => {
    return (
        <button onClick={toggleMobileMenu} className="mobilebar-btn">
            {!showMobileMenu && <p className="text">Open</p>}
            {showMobileMenu && <p className="text">Close</p>}
            <div className={showMobileMenu? 'menu-x-icon open' : 'menu-x-icon'}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </button>
    )
}

export default MobilebarBtn