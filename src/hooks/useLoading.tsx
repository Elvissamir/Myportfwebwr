import { useState } from 'react'

const useLoading = () => {
    const [loading, setLoading] = useState(false)

    const startLoading = () => {
        setLoading(true)
    }

    const finishLoading = () => {
        setLoading(false)
    }

    return {
        loading, 
        startLoading,
        finishLoading
    }
}

export default useLoading