import { useEffect, useState } from "react"

interface WindowSize {
    width: number,
    height: number
}

const useWindowSize = () => {
    const initialSize: WindowSize = {
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
 
export type { WindowSize }
export default useWindowSize