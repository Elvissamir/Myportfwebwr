import ECCircuit from "./ECCircuit"
import JavascriptIcon from "./icons/JavascriptIcon"
import NodeJsIcon from "./icons/NodeJsIcon"
import ReactIcon from "./icons/ReactIcon"
import TypescriptIcon from "./icons/TypescriptIcon"
import SkillItem from "./sections/skills/SkillItem"
import ECName from "./sections/wall/ECName"

const Banner = () => {
    return (
        <div className='banner-container'>
            <div className='banner'>
                <div className="banner-top">
                    <div className="logo">
                        <ECCircuit />
                        <ECName onFinishedName={() => false} />
                    </div>
                    <div className='technologies'>
                        <SkillItem icon={<TypescriptIcon />} name="typescript" />
                        <SkillItem icon={<JavascriptIcon />} name="javascript" />
                        <SkillItem icon={<NodeJsIcon />} name="Node" />
                        <SkillItem icon={<ReactIcon />} name="React" />
                    </div>
                </div>
                <div className="career-text">
                    <p className="tag-line">Let's create great solutions!</p>
                </div>
            </div>
        </div>
    )
}

export default Banner