import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faCogs, faRocket, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faGithubSquare } from '@fortawesome/free-brands-svg-icons'

const brandIcons = [faLinkedin, faGithub, faGithubSquare]
const solidIcons = [faEnvelope, faRocket, faCogs, faGlobe]

const setupIcons = () => {
    solidIcons.forEach(icon => library.add(icon))
    brandIcons.forEach(icon => library.add(icon))
}

export default setupIcons