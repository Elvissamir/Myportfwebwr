import { useEffect, useRef, useState } from "react"

const BackgroundGrid = () => {
    const wrapper = useRef<HTMLDivElement | null>(null)
    const [columns, setColumns] = useState(Math.floor(window.innerWidth / 100))
    const [rows, setRows] = useState(Math.floor(window.innerHeight / 100))
    const [tiles, setTiles] = useState<number[]>(new Array(columns * rows).fill(0))

    const createGrid = () => {
        const ncolums = Math.floor(window.innerWidth / 100)
        const nrows = Math.floor(window.innerHeight / 100)
        const ntiles = new Array(ncolums * nrows).fill(0)

        if (wrapper.current) {
            wrapper.current.style.setProperty('--columns', ncolums+'')
            wrapper.current.style.setProperty('--rows', nrows+'')
        }

        setTiles(ntiles)
        setColumns(ncolums)
        setRows(nrows)
    }

    useEffect(() => {
        createGrid()

        window.addEventListener('resize', createGrid)

        return () => window.removeEventListener('resize', createGrid)
    }, [])

    return (
        <div className="grid-background">
            <div 
                ref={wrapper} 
                id="tiles" 
                className="tiles">
                    {tiles.map((tile, index) => 
                        <div className="tile" key={index}></div>
                    )}
            </div>
        </div>
    )
}

export default BackgroundGrid