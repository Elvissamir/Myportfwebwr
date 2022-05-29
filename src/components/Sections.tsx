import Start from './Start';
import sections from '../core/sections';

const Sections = () => {
    return ( 
        <div className='sections-wrapper'>
            <section id={sections.start.id} className='section'>
                <Start />
            </section>
            <section id={sections.skills.id} className='section'>
                <p>Skills</p>
            </section>
            <section id={sections.projects.id} className='section'>
                <p>Projects</p>
            </section>
            <section id={sections.education.id} className='section'>
                <p>Education</p>
            </section>
            <section className='section'>
                <p>Hire Me</p>
            </section>
            <section id={sections.contact.id} className='section'>
                <p>Contact Me</p>
            </section>
            <section id={sections.about.id} className='section'>
                <p>About Me</p>
            </section>
        </div> 
    );
}

export default Sections;