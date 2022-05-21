import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faCogs, faRocket, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { } from 

const solidFonts = [faEnvelope, faRocket, faCogs, faGlobe]

export default function () {
    solidFonts.forEach(icon => library.add(icon))
}