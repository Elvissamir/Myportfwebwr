import MobileBtnIcon from './MobileBtnIcon';

interface MobileBtnProps {
    onToggle: () => void,
    showingNav: boolean
}

const MobileBtn = ({ onToggle, showingNav }: MobileBtnProps) => {
    return ( 
        <>
            <button onClick={onToggle} className="menu-btn">
                <p className='menu-btn-label'>Menu</p>
                <MobileBtnIcon showingNav={showingNav} />
            </button>
        </>
    );
}

export default MobileBtn;