const sections = {
    start:  {id: 'start', url: '#start', name: 'Start'},
    skills: {id: 'skills', url: '#skills', name: 'Skills'},
    projects: {id: 'projects', url: '#projects', name: 'Projects'},
    education: {id: 'education', url: '#education', name: 'Education'},
    about: {id: 'about', url: '#about', name: 'About Me'},
    contact: {id: 'contact', url:'#contact', name: 'Contact Me'},
}

const sectionsArray = () => {
    const keys = Object.keys(sections)
    type k = keyof typeof sections
    return keys.map(key => sections[key as k])
}

export default sections

export {
    sectionsArray
}