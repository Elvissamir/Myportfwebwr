import { motion, useInView, Variants } from "framer-motion"
import { useEffect, useRef, useState } from "react"

const TechnoSquare = () => {
    const [cols, setCols] = useState(0)
    const [rows, setRows] = useState(0)
    const [squares, setSquares] = useState<number[]>([])
    const squareRef = useRef<HTMLDivElement | null>(null)
    const [hasAnimated, setHasAnimated] = useState(false)
    const inView = useInView(squareRef)

    useEffect(() => {
        if (!hasAnimated && inView) setHasAnimated(true)
    }, [ inView ])

    useEffect(() => {
        if (squareRef.current) {
            const ncols = Math.ceil(squareRef.current.clientWidth / 30)
            const nrows = Math.ceil(squareRef.current.clientHeight / 30)

            squareRef.current.style.setProperty('--piece-height', nrows+'')
            squareRef.current.style.setProperty('--piece-width', ncols+'')

            setSquares(new Array(ncols * nrows).fill(0))
            setCols(ncols)
            setRows(nrows)
        }
    }, [ squareRef.current ])

    const calculateDistance = ({x, y}: any) => {
        const dx = Math.floor(Math.pow(x, 2))
        const dy = Math.floor(Math.pow(y, 2))
        const d = Math.sqrt(dx + dy)

        return Math.floor(d)
    }

    const calculateCoords = (index: number) => {
        let x = Math.floor(index % cols + 1)
        let y = Math.floor((index / cols) + 1)

        return {x, y}
    }    

    const squarePieceVariants: Variants = {
        initial: {
            opacity: 1
        },
        animate: (i: number) => ({
            opacity: 0,
            transition: {
                delay: calculateDistance(calculateCoords(i)) * 0.09
            }
        })
    }

    return (
        <div 
            ref={squareRef}
            className="techno-square">
                {hasAnimated && squares.map((square, index) => 
                    <motion.div 
                        variants={squarePieceVariants}
                        initial='initial'
                        animate='animate'
                        className="square-piece" 
                        key={index}
                        custom={index}>
                    </motion.div>    
                )}
        </div>
    )
}

export default TechnoSquare