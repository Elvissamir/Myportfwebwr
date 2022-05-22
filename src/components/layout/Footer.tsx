import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import links from '../../links';

const Footer = () => {
    return (
        <div className='w-full'>
            <footer className='w-full custom-padding brand-bg'>
                <div className='font-bold w-8/12 mx-auto'>
                    <p className='text-center'>My Social Networks: </p>
                    <div className='flex flex-col'>
                        <div className='flex justify-center items-center'>
                            <FontAwesomeIcon icon='envelope' className='text-xl' />
                            <p className='ml-2'>elvissam.software@gmail.com</p>
                        </div>
                        <div className='flex justify-center text-3xl mt-2'>
                            <a href={links.portfolio} target='_blank' rel="noreferrer">
                                <FontAwesomeIcon icon={{prefix: 'fas', iconName: 'globe'}} />
                            </a>
                            <a href={links.github} className='ml-3' target='_blank' rel="noreferrer">
                                <FontAwesomeIcon icon={{prefix: 'fab', iconName: 'github'}} />
                            </a>
                            <a href={links.linkedin} className='ml-3' target='_blank' rel="noreferrer">
                                <FontAwesomeIcon icon={{prefix: 'fab', iconName: 'linkedin'}} />
                            </a>
                        </div>
                    </div>
                    <div className='flex flex-col mt-5'>
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
                </div>
            </footer>
        </div>
    )
}

export default Footer