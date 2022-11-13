import ECCircuit from "../ECCircuit"

const Wall = () => {
    return (
        <div id="start" className="wall-container">
            <div className="wall">
                <div className="top">
                    <div className="wall-text-container">
                        <p className="ec-elvis-text">ELVIS CARRASCO</p>
                        <div className="ec-line"></div>
                        <p className="">Software Engineer</p>
                    </div>
                    <div className="wall-circuit-container">
                        <div className="wall-circuit">
                            <ECCircuit />
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <p className="wall-bottom-text">My Resume:</p>
                    <button className="action-btn">Resume</button>
                    <div className="mouse"></div>
                </div>
            </div>
        </div>
    )
}

export default Wall