import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface MobileBtnIconProps {
    showingNav: boolean
}

const MobileBtnIcon = ({ showingNav }: MobileBtnIconProps) => {
    return ( 
        <div className='menu-btn-icon'>
            { showingNav? 
                <FontAwesomeIcon className='menu-btn-icon' icon='close' />:
                <FontAwesomeIcon className='menu-btn-icon' icon='bars' />
            }
        </div>
    );
}

export default MobileBtnIcon;