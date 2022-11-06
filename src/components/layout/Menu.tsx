import { sectionsArray } from "../../core/sections"

const Menu = () => {
    return (
        <div className="menu-container">
            <ul className="menu">
                {sectionsArray.map((section, index) => 
                    <li className="menu-item" key={index}>
                        <a className="menu-link" href={section.url}>
                            {section.name}
                        </a>
                        <div className="menu-link-underline"></div>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Menu 