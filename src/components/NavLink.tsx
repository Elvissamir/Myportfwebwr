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
                <a className="nav-link" href={sectionInfo.id}>
                    {sectionInfo.name}
                </a>
            )}
        </>
    );
}

export default NavLink;