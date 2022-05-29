const sections = {
    start:  {id: '#start', name: 'Start'},
    skills: {id: '#skills', name: 'Skills'},
    projects: {id: '#projects', name: 'Projects'},
    education: {id: '#education', name: 'Education'},
    about: {id: '#about', name: 'About Me'},
    contact: {id: '#contact', name: 'Contact Me'},
}

const sectionsArray = () => {
    for (let section of Object.keys(sections)) {
        console.log(section)
    }
}

export default sections

export {
    sectionsArray
}