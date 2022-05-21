import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <div>
            <footer>
                <div className=' font-bold'>
                    <p>My Social Networks: </p>
                    <div className='flex flex-col'>
                        <div className='flex justify-center items-center'>
                            <FontAwesomeIcon icon='envelope' />
                            <p className='ml-2'>elvissam.software@gmail.com</p>
                        </div>
                        <div>
                            <a href="">
                                <FontAwesomeIcon icon={{prefix: 'fas', iconName: 'globe'}} />
                            </a>
                            <a href="">
                                <FontAwesomeIcon icon={{prefix: 'fab', iconName: 'github'}} />
                            </a>
                            <a href="">
                                <FontAwesomeIcon icon={{prefix: 'fab', iconName: 'linkedin'}} />
                            </a>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <FontAwesomeIcon icon='cogs' />
                        <p className='ml-2'>Designed and Developed by Elvis Carrasco</p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <p>Myportfweb</p>
                        <p className='ml-2 mr-2'>2022</p>
                        <FontAwesomeIcon icon='rocket' />
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer