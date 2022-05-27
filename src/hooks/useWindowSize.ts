import { useEffect, useState } from "react"

const useWindowSize = () => {
    const initialSize = {
        height: window.innerHeight,
        width: window.innerWidth
    }

    const [windowSize, setWindowSize] = useState(initialSize)
    const setSizeOnResize = () => setWindowSize({
        height: window.innerHeight,
        width: window.innerWidth
    })

    useEffect(() => {
        window.addEventListener('resize', setSizeOnResize)

        return () => {
            window.removeEventListener('resize', setSizeOnResize)
        }
    }, [])

    return windowSize
}

export default useWindowSize