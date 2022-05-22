import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface MobileBtnProps {
    onToggle: () => void
}

const MobileBtn = ({ onToggle }: MobileBtnProps) => {
    return ( 
        <>
            <button onClick={onToggle} className="menu-btn">
                <p className='menu-btn-label'>Menu</p>
                <FontAwesomeIcon className='menu-btn-icon' icon='bars' />
            </button>
        </>
    );
}

export default MobileBtn;