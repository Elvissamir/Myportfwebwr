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
                        {sectionInfo.name}
                </a>
            )}
        </>
    );
}

export default NavLink;