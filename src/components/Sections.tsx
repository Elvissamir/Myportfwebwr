import Start from './Start';

const Sections = () => {
    const sections = [
        <Start />
    ]

    return ( 
        <div className='sections-wrapper'>
            {sections.map(section => 
                <section className='section'>
                    {section}        
                </section>                
            )}
        </div> 
    );
}

export default Sections;