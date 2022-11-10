import FavoriteBooksList from "./FavoriteBooksList"
import FavoriteMoviesList from "./FavoriteMoviesList"
import FavoriteSeries from "./FavoriteSeries"
import ToReadList from "./ToReadList"

interface DropdownItem {
    text: string 
    content: JSX.Element | string
}

const AboutDropdown = () => {
    const dropdownList: DropdownItem[] = [
        { text: 'My favorite books?', content: <FavoriteBooksList /> },
        { text: '', content: <ToReadList /> },
        { text: 'My favorite movies?', content: <FavoriteMoviesList /> },
        { text: 'My favorite series of all time?', content: <FavoriteSeries /> },
        { text: "Some of my interests, things I'd like to learn and hobbies?", content:  },
    ]

    return (
        <div className="about-dropdown">
            <div className="dropdown-element">
                <button className="dropdown-btn"></button>
                <div className="dropdown-content">
                    <div className="details">
                       
                    </div>
                </div>
            </div>
            <p>
                Now, what about software? I love the whole experience of software engineering: typing on the keyboard, the colors of the code editor,
                learning a new language, creating a system, and then discovering a bug, going to bed thinking about the strategies to solve the problem, 
                then the next day finding the solution. The module is finally complete after long hours of effort and testing, the final result... for now.

                <br />
                Software development has no end. It keeps growing, there's always something to add or improve, and that's definitely what I like the most about it.
                <p>Alright, I look forward to hearing from you, talking a little bit, and working together.</p>
            </p>
        </div>
    )
}

export default AboutDropdown