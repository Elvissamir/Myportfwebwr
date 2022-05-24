import { useEffect, useState } from "react"

const useWindowSize = () => {
    const initialSize = {
        height: window.innerHeight,
        width: window.innerWidth
    }

    const [windowSize, setWindowSize] = useState(initialSize)
    const setWidthOnResize = () => setWindowSize({
        height: window.innerHeight,
        width: window.innerWidth
    })

    useEffect(() => {
        window.addEventListener('resize', setWidthOnResize)

        return () => {
            window.removeEventListener('resize', setWidthOnResize)
        }
    }, [])

    return windowSize
}

export default useWindowSize