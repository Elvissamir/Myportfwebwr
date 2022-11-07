import { useState } from "react"
import sections from "../../core/sections"
import JavascriptIcon from "../icons/JavascriptIcon"
import LaravelIcon from "../icons/LaravelIcon"
import MongoIcon from "../icons/MongoIcon"
import MysqlIcon from "../icons/MysqlIcon"
import NodeJsIcon from "../icons/NodeJsIcon"
import PhpIcon from "../icons/PhpIcon"
import ReactIcon from "../icons/ReactIcon"
import SassIcon from "../icons/SassIcon"
import TailwindIcon from "../icons/TailwindIcon"
import TypescriptIcon from "../icons/TypescriptIcon"
import VueIcon from "../icons/VueIcon"
import ProjectList from "./ProjectList"
import ProjectWindow from "./ProjectWindow"
import Section from "./Section"

export interface ProjectData {
    title: string 
    subtitle: string 
    frontImage: string
    images: string[]
    stack: JSX.Element[]
    description: string
    githubUrl: string
}

const ProjectsSection = () => {
    const description = "These are some of the projects I've developed:" 
    const projectList: ProjectData[] = [
        {
            title: 'CPT', 
            subtitle: 'Crypto Portfolio Tracker', 
            frontImage: '', 
            images: [], 
            description: 'CPT keeps track of your crypto portfolio and markets. The main features are: portfolio management, charts (top cryptos, distribution), crypto markets.',
            stack: [ <PhpIcon />, <LaravelIcon />, <VueIcon />, <JavascriptIcon />, <TailwindIcon />, <MysqlIcon />],
            githubUrl: 'https://github.com/Elvissamir/cryptoPT'
        },
        {
            title: 'Servm', 
            subtitle: 'School Management', 
            frontImage: '', 
            images: [], 
            description: 'Servm is a management system developed for the "Antonio José" school. It allows management of students, teachers, courses, subjects and more.',
            stack: [ <PhpIcon />, <LaravelIcon />, <VueIcon />, <JavascriptIcon />, <TailwindIcon />, <MysqlIcon />],
            githubUrl: 'https://github.com/Elvissamir/registrationManager'
        },
        {
            title: 'Myportfwebwr', 
            subtitle: 'My web portfolio (with React)', 
            frontImage: '', 
            images: [], 
            description: 'My awesome web portfolio v2. The design was inspired by paperpillars and theta network.',
            stack: [<ReactIcon />, <TypescriptIcon />, <SassIcon />],
            githubUrl: 'https://github.com/Elvissamir/Myportfweb'
        },
        {
            title: 'AAC', 
            subtitle: 'Algorithms & Challenges', 
            frontImage: '', 
            images: [], 
            description: 'AAC is a project aimed to gather cool algorithms and coding challenges, and present a UI for them.',
            stack: [<VueIcon />, <JavascriptIcon />, <TailwindIcon />],
            githubUrl: 'https://github.com/Elvissamir/AAC'
        },
        {
            title: 'Fullrvmovies', 
            subtitle: 'React VMovies', 
            frontImage: '', 
            images: [], 
            description: 'Movie inventory manager created with Node and React.',
            stack: [ <NodeJsIcon />, <ReactIcon />, <MongoIcon />, <JavascriptIcon />, <TailwindIcon />],
            githubUrl: 'https://github.com/Elvissamir/Fullrvmovies'
        },
        {
            title: 'Front Store', 
            subtitle: 'React/Redux Front Store', 
            frontImage: '', 
            images: [], 
            description: 'Front Store developed using react and redux made for Scandiweb.',
            stack: [ <ReactIcon />, <JavascriptIcon />],
            githubUrl: 'https://github.com/Elvissamir/Scweb'
        }
    ]

    const [currentProject, setCurrentProject] = useState<ProjectData>(projectList[0])
    const [showDetails, setShowDetails] = useState(true)

    const handleSeeDetails = (index: number) => {
        setCurrentProject(projectList[index])
        setShowDetails(true)
    }

    const handleCloseWindow = () => {
        setShowDetails(false)
    }

    return (
        <>
            <ProjectWindow show={showDetails} data={currentProject} closeWindow={handleCloseWindow} />
            <Section 
                id={sections.projects.id} 
                title={sections.projects.name}
                description={description}
                content={<ProjectList 
                    projectList={projectList} 
                    handleSeeDetails={handleSeeDetails} />} />
        </>
    )
}

export default ProjectsSection