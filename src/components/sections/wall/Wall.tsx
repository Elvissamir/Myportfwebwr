import { ChangeEvent, useState } from "react"
import ECCircuit from "../../ECCircuit"
import ECName from "./ECName"

type Lang = 'eng' | 'spa'

const Wall = () => {
    const [resume_lang, setResume_lang] = useState<Lang>('eng')

    const handleChangeSelectInput = (e: ChangeEvent<HTMLSelectElement>) => {
        setResume_lang(e.target.value as Lang)
    }

    return (
        <div id="start" className="wall-container">
            <div className="wall">
                <div className="top">
                    <div className="wall-text-container">
                        <div className="name-container">
                            <ECName />
                        </div>
                        <div className="ec-line"></div>
                        <p className="ec-career">Software Engineer</p>
                    </div>
                    <div className="wall-circuit-container">
                        <div className="wall-circuit">
                            <ECCircuit />
                            <div className="background-gradient"></div>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="resume-download-container">
                        <div className="resume-download-selection">
                            <p className="wall-bottom-text">My Resume:</p>
                            <select 
                                onChange={handleChangeSelectInput}
                                className="input-select"
                                name="resume" 
                                id="resume" 
                                value={resume_lang}>
                                    <option className="select-option" value="eng">English</option>
                                    <option className="select-option" value="spa">Spanish</option>
                            </select>
                        </div>
                        <button className="action-btn">Resume</button>
                    </div>
                    <div className="mouse"></div>
                </div>
            </div>
        </div>
    )
}

export default Wall