const favoriteBooks = [
    "Can't hurt me by David Goggins",
    "The Fastlane Millionaire by MJ DeMarco ",
    "Unscripted by MJ DeMarco",
    "The Power of Habit by Charles Duhigg"
]

const FavoriteBooksList = () => {
    return (
        <ol className="list-container">
            {favoriteBooks.map((book, index) => 
                <li className="list-item" key={index}>{book}</li>
            )}
        </ol>
    )
}

export default FavoriteBooksList