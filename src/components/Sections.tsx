import Start from './Start';

const Sections = () => {
    const sections = [
        <Start />
    ]

    console.log('rendered...')

    return ( 
        <div className='sections-wrapper'>
            {sections.map((section, index) => 
                <section key={index} className='section'>
                    {section}        
                </section>                
            )}
        </div> 
    );
}

export default Sections;