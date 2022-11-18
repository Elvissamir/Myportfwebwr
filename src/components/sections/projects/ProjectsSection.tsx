import { useState } from "react"
import sections from "../../../core/sections"
import FirebaseIcon from "../../icons/FirebaseIcon"
import GoogleMapIcon from "../../icons/GoogleMapIcon"
import GraphqlIcon from "../../icons/GraphqlIcon"
import JavascriptIcon from "../../icons/JavascriptIcon"
import LaravelIcon from "../../icons/LaravelIcon"
import MongoIcon from "../../icons/MongoIcon"
import MysqlIcon from "../../icons/MysqlIcon"
import NodeJsIcon from "../../icons/NodeJsIcon"
import PhpIcon from "../../icons/PhpIcon"
import ReactIcon from "../../icons/ReactIcon"
import SassIcon from "../../icons/SassIcon"
import TailwindIcon from "../../icons/TailwindIcon"
import TypescriptIcon from "../../icons/TypescriptIcon"
import VueIcon from "../../icons/VueIcon"
import ProjectList from "./ProjectList"
import ProjectWindow from "./ProjectWindow"
import Section from "../Section"
import { imagesDir } from "../../../core/imagesDir"
import { ProjectData } from "../../../core/projects"
import DockerIcon from "../../icons/DockerIcon"
import ExpressIcon from "../../icons/ExpressIcon"

const ProjectsSection = () => {
    const description = "These are some of the projects I've developed:"

    const projectList: ProjectData[] = [
        {
            title: 'Takenjobs', 
            subtitle: 'Encuentra tu nuevo futuro', 
            frontImage: imagesDir+'tkj/tkj01.png', 
            images: [imagesDir+'tkj/tkj02.png', imagesDir+'tkj/tkj03.png', imagesDir+'tkj/tkj04.png', imagesDir+'tkj/tkj05.png'], 
            description: 'Takenjobs is a platform developed to help users find jobs in Chile. It uses tags to filter and order job postings. Users can also apply for jobs and contact companies.',
            stack: [<ReactIcon />, <TypescriptIcon />, <JavascriptIcon />, <SassIcon />, <NodeJsIcon />, <ExpressIcon />, <FirebaseIcon />, <GoogleMapIcon />],
            githubUrl: null
        },
        {
            title: 'Myportfwebwr', 
            subtitle: 'My web portfolio v2 (with React)', 
            frontImage: imagesDir+'myportfwebwr/01.png', 
            images: [imagesDir+'myportfwebwr/01.png', imagesDir+'myportfwebwr/02.png', imagesDir+'myportfwebwr/03.png',], 
            description: `My awesome web portfolio v2 (This time, made with React!). The design and development were done by me, and the theme is based on circuits and technology. 
                I used simple css transitions and Framer Motion to implement the animations.`,
            stack: [<ReactIcon />, <TypescriptIcon />, <JavascriptIcon />, <SassIcon />],
            githubUrl: null
        },
        {
            title: 'Fullrvmovies', 
            subtitle: 'React VMovies', 
            frontImage: imagesDir+'/fullrvmovies/01.png', 
            images: [imagesDir+'/fullrvmovies/02.png', imagesDir+'/fullrvmovies/03.png', imagesDir+'/fullrvmovies/04.png', imagesDir+'/fullrvmovies/05.png',], 
            description: 'Movie inventory manager created with Node and React.',
            stack: [ <NodeJsIcon />, <ReactIcon />, <ExpressIcon />, <MongoIcon />, <JavascriptIcon />, <TailwindIcon />, <DockerIcon />],
            githubUrl: 'https://github.com/Elvissamir/Fullrvmovies'
        },
        {
            title: 'AAC', 
            subtitle: 'Algorithms & Challenges', 
            frontImage: imagesDir+'algoaac/shortest.png', 
            images: [imagesDir+'algoaac/fizzbuzz.png', imagesDir+'algoaac/binarytree.png',  imagesDir+'algoaac/maxchars.png', imagesDir+'algoaac/linkedlist.png'], 
            description: 'AAC is a project created to cover algorithms and coding challenges such as a binary tree, linked lists, fizzbuzz, and palindromes and present a UI for them. It was designed and developed by me.',
            stack: [  <JavascriptIcon />, <VueIcon />, <TailwindIcon />, <DockerIcon /> ],
            githubUrl: 'https://github.com/Elvissamir/AAC'
        },    
        {
            title: 'CPT', 
            subtitle: 'Crypto Portfolio Tracker', 
            frontImage: imagesDir+'cpt/cpt01.png', 
            images: [imagesDir+'cpt/cpt02.png', imagesDir+'cpt/cpt03.png', imagesDir+'cpt/cpt04.png',imagesDir+'cpt/cpt05.png'], 
            description: 'CPT keeps track of your crypto portfolio and markets. The main features are portfolio management, charts (top cryptos, distribution), and crypto markets.',
            stack: [ <PhpIcon />, <LaravelIcon />, <VueIcon />, <JavascriptIcon />, <TailwindIcon />, <MysqlIcon />, <DockerIcon />],
            githubUrl: 'https://github.com/Elvissamir/cryptoPT'
        },
        {
            title: 'Front Store', 
            subtitle: 'React/Redux Front Store', 
            frontImage: imagesDir+'/frontStore/01.png',
            images: [imagesDir+'/frontStore/02.png', imagesDir+'/frontStore/03.png', imagesDir+'/frontStore/04.png', imagesDir+'/frontStore/05.png',], 
            description: 'Front Store made for Scandiweb using React, Graphql, and Redux.',
            stack: [ <ReactIcon />, <JavascriptIcon />, <GraphqlIcon /> ],
            githubUrl: 'https://github.com/Elvissamir/Scweb'
        },
        {
            title: 'Servm', 
            subtitle: 'School Management', 
            frontImage: imagesDir+'servm/servm01.png', 
            images: [imagesDir+'servm/servm02.png', imagesDir+'servm/servm03.png', imagesDir+'servm/servm04.png', imagesDir+'servm/servm05.png',], 
            description: 'Servm is a management system developed for the "Antonio José" school. It allows the management of students, teachers, courses, subjects, and more.',
            stack: [ <PhpIcon />, <LaravelIcon />, <VueIcon />, <JavascriptIcon />, <TailwindIcon />, <MysqlIcon />, <DockerIcon />],
            githubUrl: 'https://github.com/Elvissamir/registrationManager'
        },
        {
            title: 'AlgoUI', 
            subtitle: 'Work in progress...', 
            frontImage: imagesDir+'algoui/01.png', 
            images: [imagesDir+'algoui/01.png'], 
            description: "AlgoUI is a personal project and it's not ready yet. :) I hope it's finished soon!",
            stack: [ <TypescriptIcon />, <ReactIcon />, <JavascriptIcon />, <SassIcon />],
            githubUrl: null
        },
    ]
    
    const [currentProject, setCurrentProject] = useState<ProjectData>(projectList[0])
    const [showDetails, setShowDetails] = useState(false)

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