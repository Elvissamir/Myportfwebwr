const ToReadList = () => {
    const toRead = [
        "King, Warrior, Magician, Lover",
        "Refactoring - Improving the design of existing code",
        "Testing Javascript Applications"
    ]

    return (
        <ul className="list-container">
            {toRead.map((book, index) => 
                <li className="list-item" key={index}>{book}</li>
            )}
        </ul>
    )
}

export default ToReadList