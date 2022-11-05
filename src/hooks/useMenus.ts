import { useState, useEffect } from 'react';
import { WindowSize } from './useWindowSize';

const useMenus = (windowSize: WindowSize) => {
    const [showMobile, setShowMobile] = useState<boolean>(true)
    const [showNav, setShowNav] = useState<boolean>(false)

    useEffect(() => {
        if (windowSize.width >= 1024) {
            setShowNav(true)
            setShowMobile(false)
        }
        else {
            setShowMobile(true)
        }
    }, [windowSize.width])

    return {
        showNav,  
        showMobile, 
    }
}

export default useMenus