interface SectionData {
    id: string 
    url: string 
    name: string
}

interface SectionKey {
    [key: string]: SectionData
}

const sections: SectionKey = {
    start:  {id: 'start', url: '#start', name: 'Start'},
    skills: {id: 'skills', url: '#skills', name: 'Skills'},
    projects: {id: 'projects', url: '#projects', name: 'Projects'},
    education: {id: 'education', url: '#education', name: 'Education'},
    about: {id: 'about', url: '#about', name: 'About Me'},
    contact: {id: 'contact', url:'#contact', name: 'Contact Me'},
}

const sectionsArray = Object.keys(sections).map((key, index) => sections[key as keyof typeof sections] as SectionData)

export default sections

export {
    sectionsArray
}