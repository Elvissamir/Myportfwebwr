import { useEffect, useState } from "react"

const useWindowSize = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const setWidthOnResize = () => setWindowWidth(window.innerWidth)

    useEffect(() => {
        window.addEventListener('resize', setWidthOnResize)

        return () => {
            window.removeEventListener('resize', setWidthOnResize)
        }
    }, [])

    return windowWidth
}

export default useWindowSize