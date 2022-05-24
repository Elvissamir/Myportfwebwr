import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import links from '../../core/links';
import { useEffect } from 'react';
import useWindowSize from '../../hooks/useWindowSize';

const Footer = () => {
    const windowSize = useWindowSize()

    useEffect(() => {
        console.log('Window height changed', windowSize.height * 0.1)
    }, [windowSize.height])

    return (
        <div className='w-full'>
            <footer className='w-full font-lora custom-padding brand-bg brand-letter-light 2xl:w-10/12 2xl:ml-auto'>
                <div className='font-bold w-8/12 mx-auto'>
                    <p className='text-center text-xl'>My Social Networks: </p>
                    <div className='flex flex-col'>
                        <div className='flex justify-center items-center'>
                            <FontAwesomeIcon icon='envelope' className='text-xl' />
                            <p className='ml-2 text-lg'>elvissam.software@gmail.com</p>
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
                        <div className='flex justify-center items-center text-lg'>
                            <FontAwesomeIcon icon='cogs' />
                            <p className='ml-2'>Designed and Developed by Elvis Carrasco</p>
                        </div>
                        <div className='flex justify-center items-center text-lg'>
                            <p>Myportfweb</p>
                            <p className='ml-2 mr-2 text'>2022</p>
                            <FontAwesomeIcon icon='rocket' />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer