import Skills from './Skills';

const Sections = () => {
    const sections = [
        <Skills />
    ]

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