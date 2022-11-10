const HobbiesAndInterestsList = () => {
    const hobbies = [
        "Stoicism",
        "Machine learning",
        "Leetcode (love it and hate it)",
        "Testing (TDD)",
        "Playing the guitar"
    ]

    return (
        <div className="list-container">
            <ol className="list">
                {hobbies.map((hobbie, index) => 
                    <li className="list-item" key={index}>{hobbie}</li>
                )}
            </ol>
        </div>
    )
}

export default HobbiesAndInterestsList