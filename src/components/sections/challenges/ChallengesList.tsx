import { motion, Variants } from "framer-motion"
import { imagesDir } from "../../../core/imagesDir"
import ChallengeCard from "./ChallengeCard"

export interface ChallengeData {
    name: string 
    imageUrl: string 
    link: string
}

const ChallengesList = () => {
    const imageDir = `${imagesDir}/algoaac`
    const challengeList: ChallengeData[] = [
        { 
            name: 'Anagram', 
            imageUrl: imageDir+'anagram.png',
            link: 'https://aacsite.netlify.app/anagram'
        },
        { 
            name: 'Binary Tree', 
            imageUrl: imageDir+'binarytree.png',
            link: 'https://aacsite.netlify.app/binaryTree'
        },
        { 
            name: 'Linked List', 
            imageUrl: imageDir+'linkedlist.png',
            link: 'https://aacsite.netlify.app/linkedList'
        },  { 
            name: 'Selection Sort', 
            imageUrl: imageDir+'selection.png',
            link: 'https://aacsite.netlify.app/selectionSort'
        },
        { 
            name: 'Shortest Path', 
            imageUrl: imageDir+'shortest.png',
            link: 'https://aacsite.netlify.app/shortestPath'
        },
        { 
            name: 'String Reversal', 
            imageUrl: imageDir+'stringreversal.png',
            link: 'https://aacsite.netlify.app/stringReversal'
        },
        { 
            name: 'Palindrome', 
            imageUrl: imageDir+'palindrome.png',
            link: 'https://aacsite.netlify.app/palindrome'
        },
        { 
            name: 'Fizzbuzz', 
            imageUrl: imageDir+'fizzbuzz.png',
            link: 'https://aacsite.netlify.app/fizzbuzz'
        },
        { 
            name: 'Find and Count Vowels', 
            imageUrl: imageDir+'findvowels.png',
            link: 'https://aacsite.netlify.app/findvowels'
        },
        { 
            name: 'Max chars', 
            imageUrl: imageDir+'maxchars.png',
            link: 'https://aacsite.netlify.app/maxchars'
        }
    ]

    const challengeItemVariants: Variants = {
        start: {
            opacity: 0
        },
        show: {
            opacity: 1
        }
    }

    return (
        <div className="challenges-list-container">
            <motion.ul 
                initial={'start'}
                whileInView={'show'}
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.25, bounce: 0 }}
                className="challenges-list">
                    {challengeList.map((challenge, index) => 
                        <motion.li 
                            variants={challengeItemVariants}
                            className="challenge-item" 
                            key={index}>
                                <ChallengeCard data={challenge} />
                        </motion.li>
                    )}
            </motion.ul>
        </div>
    )
}

export default ChallengesList