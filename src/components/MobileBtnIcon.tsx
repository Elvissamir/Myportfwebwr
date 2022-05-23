import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface MobileBtnIconProps {
    showingNav: boolean
}

const MobileBtnIcon = ({ showingNav }: MobileBtnIconProps) => {
    return ( 
        <div className='menu-btn-icon'>
            { showingNav? 
                <FontAwesomeIcon icon='close' />:
                <FontAwesomeIcon icon='bars' />
            }
        </div>
    );
}

export default MobileBtnIcon;