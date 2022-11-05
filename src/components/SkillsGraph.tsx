import FirebaseIcon from "./icons/FirebaseIcon"
import GitIcon from "./icons/GitIcon"
import GoogleMapIcon from "./icons/GoogleMapIcon"
import JavascriptIcon from "./icons/JavascriptIcon"
import MongoIcon from "./icons/MongoIcon"
import NodeJsIcon from "./icons/NodeJsIcon"
import ReactIcon from "./icons/ReactIcon"
import SassIcon from "./icons/SassIcon"
import TypescriptIcon from "./icons/TypescriptIcon"
import SkillItem from "./SkillItem"

const SkillsGraph = () => {
    return (
        <div className="skill-graph-container">
            <div className="skill-graph">
                <div className="skill-row row-1">
                    <SkillItem name="Javascript" icon={<JavascriptIcon />} />
                </div>
                <div className="skill-row row-2">
                    <SkillItem name="Typescript" icon={<TypescriptIcon />} />
                    <SkillItem name="React" icon={<ReactIcon />} />
                </div>
                <div className="skill-row row-3">
                    <SkillItem name="Node" icon={<NodeJsIcon />} />
                    <SkillItem name="MongoDB" icon={<MongoIcon />} />
                    <SkillItem name="Firebase Auth" icon={<FirebaseIcon />} />
                </div>
                <div className="skill-row row-4">
                    <SkillItem name="Google Maps" icon={<GoogleMapIcon />} />
                    <SkillItem name="Sass" icon={<SassIcon />} />
                </div>
                <div className="skill-row row-5">
                    <SkillItem name="Git" icon={<GitIcon />} />
                </div>
            </div>
        </div>
    )
}

export default SkillsGraph