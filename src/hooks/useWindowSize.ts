import { useEffect, useState } from "react"

const useWindowSize = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const setWidthOnResize = () => {
        console.log('the window changed', window.window.innerWidth)
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', setWidthOnResize)

        return () => {
            window.removeEventListener('resize', setWidthOnResize)
        }
    }, [])

    return windowWidth
}

export default useWindowSize