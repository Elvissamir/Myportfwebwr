interface SectionInfo {
    id: string,
    url: string,
    name: string
}

interface NavLinkProps {
    sectionsInfo: SectionInfo[]
}

const NavLink = ({sectionsInfo}: NavLinkProps) => {
    return ( 
        <>
            {sectionsInfo.map(sectionInfo =>     
                <a 
                    className="nav-link gradient-text" 
                    href={sectionInfo.url}
                    key={sectionInfo.name}>
                        <div>
                            {sectionInfo.name}
                        </div>
                        <div className="nav-link-line"></div>
                </a>
            )}
        </>
    );
}

export default NavLink;