import { useState, useEffect } from 'react'
import { AnimatePresence, motion, Variants } from 'framer-motion'

const name = ['E', 'L', 'V', 'I', 'S']
const lname = ['C', 'A', 'R', 'R', 'A', 'S', 'C', 'O']

interface ECNameProps {
    onFinishedName: () => void
}

const ECName = ({ onFinishedName }: ECNameProps) => {
    const [myName, setMyName] = useState<string[]>(name)
    const [myLName, setMyLName] = useState<string[]>(lname)
   
    useEffect(() => {
        onFinishedName()
    }, [ myName, myLName ])

    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.5,
            repeatType: 'loop',
          },
        }
    }
      
    const nameLetter: Variants = {
        hidden: {
            opacity: 0,
            textShadow: '0 0 10px rgba(255, 255, 255, 0)',
            transform: 'scale(2)',
        },
        show: {
            opacity: 1, 
            color: ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)'],
            textShadow: ['0 0 30px rgb(255, 255, 255)', '0 0 10px rgba(255, 255, 255, 0)'],
            transform: 'scale(1)',
            transition: {
                duration: 1,
            }
        }
    }

    const lnameLetter: Variants = {
        hidden: {
            opacity: 0,
            transform: 'scale(2)',
        },
        show: {
            opacity: 1,
            color: ['#29b3eb', '#29b3eb', '#29b3eb', 'rgba(255, 255, 255, 0)'],
            WebkitTextStrokeColor: ['#29b3eb', '#29b3eb', '#29b3eb', 'rgb(255, 255, 255)'],
            textShadow: ['0 0 25px #29b3eb', '0 0 10px rgba(255, 255, 255, 0)'],
            transform: 'scale(1)',
            transition: {
                duration: 1,
            }
        }
    }
      
    return (
        <div className='ec-full-name'>
            <motion.ul 
                variants={container}
                layout
                className="ec-name-container name"
                initial="hidden"
                animate="show">
                    {myName.map((letter, index) => 
                        <AnimatePresence key={index}>
                            {letter && 
                                <motion.span 
                                    variants={nameLetter}
                                    custom={index}
                                    className='name-letter letter'>
                                        {letter}
                                </motion.span>}
                        </AnimatePresence>
                    )}
                    {myLName.map((letter, index) => 
                        <AnimatePresence key={index}>
                            {letter && 
                                <motion.span 
                                    custom={index}
                                    variants={lnameLetter}
                                    className='lname-letter letter'>
                                        {letter}
                                </motion.span>}
                        </AnimatePresence>
                    )}
            </motion.ul>
        </div>
    )
}

export default ECName