import { useEffect } from "react"

interface UseHideOuterScrollProps {
    hideScroll: boolean 
}

const useHideOuterScroll = ({ hideScroll }: UseHideOuterScrollProps) => {
    useEffect(() => {
        if (hideScroll) document.body.style.overflowY = 'hidden'
        else document.body.style.overflowY = 'scroll'
    }, [ hideScroll ])
}

export default useHideOuterScroll