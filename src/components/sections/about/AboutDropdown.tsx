import { motion } from "framer-motion"
import { useState } from "react"
import AboutDropdownContent from "./AboutDropdownContent"
import FavoriteBooksList from "./FavoriteBooksList"
import FavoriteMoviesList from "./FavoriteMoviesList"
import FavoriteSeries from "./FavoriteSeries"
import FavoriteSongsList from "./FavoriteSongsList"
import HobbiesAndInterestsList from "./HobbiesAndInterestsList"
import ToReadList from "./ToReadList"

export interface DropdownItem {
    text: string 
    content: JSX.Element | string
}

const AboutDropdown = () => {
    const dropdownList: DropdownItem[] = [
        { text: 'My favorite books?', content: <FavoriteBooksList /> },
        { text: 'Books I want to read', content: <ToReadList /> },
        { text: 'My favorite movies?', content: <FavoriteMoviesList /> },
        { text: 'My favorite series of all time?', content: <FavoriteSeries /> },
        { text: 'My favorite songs?', content: <FavoriteSongsList /> },
        { text: "Things I'd like to learn and hobbies?", content: <HobbiesAndInterestsList /> },
    ]

    const [ activeIndex, setActiveIndex ] = useState<number | null>(null)

    const handleOpenDropdown = (index: number) => {
        if (index === activeIndex) 
            return setActiveIndex(null)
        
        setActiveIndex(index)
    }

    return (
        <div className="about-dropdown">
            <motion.ul 
                layout
                className="dropdown-list">         
                    {dropdownList.map((dropdownItem, index) => 
                        <li className="dropdown-item" key={index}>
                            <button 
                                onClick={() => handleOpenDropdown(index)}
                                className="dropdown-btn">
                                    {dropdownItem.text}
                            </button>
                            <AboutDropdownContent
                                activeIndex={activeIndex}
                                index={index}
                                dropdownItem={dropdownItem} />
                        </li>
                    )}
                    <div className="dropdown-item">
                        <button className="dropdown-btn"></button>
                    </div>
            </motion.ul>
        </div>
    )
}

export default AboutDropdown