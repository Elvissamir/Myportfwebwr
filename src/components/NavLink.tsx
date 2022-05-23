interface SectionInfo {
    id: string,
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
                    href={sectionInfo.id}
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