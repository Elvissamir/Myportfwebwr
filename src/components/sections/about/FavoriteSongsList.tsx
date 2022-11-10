const FavoriteSongsList = () => {
    const favoriteSongs = [
        "Second Wind (You're only human) by Billy Joel",
        "Don't worry be happy by Bobby Mcferrin",
        "I can see clearly now by Johnny Nash",
        "Raindrops keep falling on my head by Bj Thomas",
        "The year of the cat by Al Stewart"
    ]

    return (
        <>
            <div className="list-container">
                <ul className="list">
                    {favoriteSongs.map((song, index) => 
                        <li className="list-item" key={index}>{song}</li>
                    )}
                </ul>
            </div>
            <p className="text">Oh man, I could write a long list...</p>
        </>
    )
}

export default FavoriteSongsList