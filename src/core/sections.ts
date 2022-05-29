const sections = {
    start:  {id: '#start', name: 'Start'},
    skills: {id: '#skills', name: 'Skills'},
    projects: {id: '#projects', name: 'Projects'},
    education: {id: '#education', name: 'Education'},
    about: {id: '#about', name: 'About Me'},
    contact: {id: '#contact', name: 'Contact Me'},
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