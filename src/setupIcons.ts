import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faCogs, faRocket, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const brandIcons = [faLinkedin, faGithub]
const solidIcons = [faEnvelope, faRocket, faCogs, faGlobe]

export default function () {
    solidIcons.forEach(icon => library.add(icon))
    brandIcons.forEach(icon => library.add(icon))
}