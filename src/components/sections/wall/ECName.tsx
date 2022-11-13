import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const name = ['E', 'L', 'V', 'I', 'S']
const lname = ['C', 'A', 'R', 'R', 'A', 'S', 'C', 'O']

const ECName = () => {
    const [myName, setMyName] = useState<string[]>(['E'])
    const [myLName, setMyLName] = useState<string[]>(['C'])
   
    useEffect(() => {
        if (myName.length < name.length) {
            const timer = setInterval(() => {
                console.log('interval')
                setMyName([...myName, name[myName.length]])
            }, 500)
    
            return () => clearInterval(timer)
        }
        else if (myLName.length < lname.length) {
            const timer2 = setInterval(() => {
                console.log('interval')
                setMyLName([...myLName, lname[myLName.length]])
            }, 500)
    
            return () => clearInterval(timer2)
        }
    }, [ myName, myLName ])

    return (
        <motion.div 
            layout
            className="ec-name-container">
                {myName.map((letter, index) => 
                    <AnimatePresence key={index}>
                        {letter && 
                            <motion.span 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className='letter'>
                                    {letter}
                            </motion.span>}
                    </AnimatePresence>
                )}

                {myLName.map((letter, index) => 
                    <AnimatePresence key={index}>
                        {letter && 
                            <motion.span 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className='letter'>
                                    {letter}
                            </motion.span>}
                    </AnimatePresence>
                )}
        </motion.div>
    )
}

export default ECName