import ProjectCard from "./ProjectCard"

interface ProjectData {
    title: string 
    subtitle: string 
    frontImage: string
    images: string[]
    description: string
}

const ProjectList = () => {
    const projectList: ProjectData[] = [
        {
            title: 'CPT', 
            subtitle: 'Crypto Portfolio Tracker', 
            frontImage: '', 
            images: [], 
            description: 'CPT keeps track of your crypto portfolio and markets. The main features are: portfolio management, charts (top cryptos, distribution), crypto markets.'
        },
        {
            title: 'Servm', 
            subtitle: 'School Management', 
            frontImage: '', 
            images: [], 
            description: 'Servm is a management system developed for the "Antonio José" school. It allows management of students, teachers, courses, subjects and more.'
        },
        {
            title: 'Myportfwebwr', 
            subtitle: 'My web portfolio (with React)', 
            frontImage: '', 
            images: [], 
            description: 'My awesome web portfolio v2. The design was inspired by paperpillars and theta network.'
        },
        {
            title: 'AAC', 
            subtitle: 'Algorithms & Challenges', 
            frontImage: '', 
            images: [], 
            description: 'AAC is a project aimed to gather cool algorithms and coding challenges, and present a UI for them.'
        },
        {
            title: 'Fullrvmovies', 
            subtitle: 'React VMovies', 
            frontImage: '', 
            images: [], 
            description: 'Movie inventory manager created with Node and React.'
        },
        {
            title: 'Front Store', 
            subtitle: 'React/Redux Front Store', 
            frontImage: '', 
            images: [], 
            description: 'Front Store developed using react and redux made for Scandiweb.'
        }
    ]

    return (
        <div className="project-list-container">
            <div className="project-list">
                {projectList.map((project, index) => 
                    <ProjectCard />                
                )}
            </div>
        </div>
    )
}

export default ProjectList