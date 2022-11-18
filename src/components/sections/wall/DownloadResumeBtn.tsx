import { useState, useEffect } from 'react'
import { Lang } from "../../../core/types"

interface DownloadResumeBtnProps {
    lang: Lang
}

const engResumeUrl = '/files/ELVIS CARRASCO RESUME ENG.pdf'
const spaResumeUrl = '/files/ELVIS CARRASCO RESUME SPA.pdf'

const DownloadResumeBtn = ({ lang }: DownloadResumeBtnProps) => {
    const [resumeUrl, setResumeUrl] = useState(engResumeUrl)

    useEffect(() => {
        if (lang === 'eng') setResumeUrl(engResumeUrl)
        else setResumeUrl(spaResumeUrl)
    }, [ lang ])

    return (
        <a className="action-btn" href={resumeUrl} download title={'ELVIS CARRASCO RESUME '+lang}>Resume</a>
    )
}

export default DownloadResumeBtn