import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faBars, faCogs, faRocket, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faGithubSquare } from '@fortawesome/free-brands-svg-icons'

const solidIcons = [faEnvelope, faBars, faRocket, faCogs, faGlobe]
const brandIcons = [faLinkedin, faGithub, faGithubSquare]

const setupIcons = () => {
    solidIcons.forEach(icon => library.add(icon))
    brandIcons.forEach(icon => library.add(icon))
}

export default setupIcons