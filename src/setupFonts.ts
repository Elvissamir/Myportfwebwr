import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const solidFonts = [faCoffee]

export default function () {
    solidFonts.forEach(icon => library.add(icon))
}