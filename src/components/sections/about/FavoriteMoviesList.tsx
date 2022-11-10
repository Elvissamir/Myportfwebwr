const FavoriteMoviesList = () => {
    const favoriteMovies = [
        "'The Pursuit of Happyness'",
        "The Harry Potter saga",
        "Spiderman (The best spiderman: Tobey Maguire)",
        "The time machine ",
        "Django Unchained"
    ]

    return (
        <div className="list-container">
            <ul className="list">
                {favoriteMovies.map((movie, index) => 
                    <li className="list-item" key={index}>{movie}</li>
                )}
            </ul>
        </div>
    )
}

export default FavoriteMoviesList