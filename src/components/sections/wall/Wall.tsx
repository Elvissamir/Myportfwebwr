import { ChangeEvent, useState } from "react"
import { Lang } from "../../../core/types"
import ECCircuit from "../../ECCircuit"
import DownloadResumeBtn from "./DownloadResumeBtn"
import ECName from "./ECName"

const Wall = () => {
    const [resume_lang, setResume_lang] = useState<Lang>('eng')
    const [showAfterName, setShowAfterName] = useState(false)

    const handleChangeSelectInput = (e: ChangeEvent<HTMLSelectElement>) => {
        setResume_lang(e.target.value as Lang)
    }

    const handleFinishedName = () => {
        setTimeout(() => {
            setShowAfterName(true)
        }, 6500)
    }

    return (
        <div id="start" className="wall-container">
            <div className="wall">
                <div className="top">
                    <div className="wall-text-container">
                        <div className="name-container">
                            <ECName onFinishedName={handleFinishedName} />
                        </div>
                        <div className={showAfterName? 'ec-line full-line' : 'ec-line'}></div>
                        <p className="ec-career">Software Engineer</p>
                    </div>
                    <div className="wall-circuit-container">
                        <div className={ showAfterName? "wall-circuit show-circuit" : "wall-circuit"}>
                            <ECCircuit />
                        </div>
                    </div>
                </div>
                <div className={showAfterName? "bottom show-bottom" : "bottom"}>
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
                        <DownloadResumeBtn lang={resume_lang} />
                    </div>
                </div>
                <div className="mouse"></div>
            </div>
        </div>
    )
}

export default Wall