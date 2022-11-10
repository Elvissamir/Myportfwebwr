import FavoriteBooksList from "./FavoriteBooksList"
import FavoriteMoviesList from "./FavoriteMoviesList"
import FavoriteSeries from "./FavoriteSeries"
import FavoriteSongsList from "./FavoriteSongsList"
import HobbiesAndInterestsList from "./HobbiesAndInterestsList"
import ToReadList from "./ToReadList"

interface DropdownItem {
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
        { text: "Some of my interests, things I'd like to learn and hobbies?", content: <HobbiesAndInterestsList /> },
    ]

    return (
        <div className="about-dropdown">
            <ul className="dropdown-list">         
                {dropdownList.map((dropdownItem, index) => 
                    <li className="dropdown-item" key={index}>
                        <button className="dropdown-btn">{dropdownItem.text}</button>
                        <div className="dropdown-content">
                            <div className="details">
                                {dropdownItem.content}
                            </div>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default AboutDropdown