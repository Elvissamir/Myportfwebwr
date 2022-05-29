import sections from '../core/sections';

const Start = () => {
    return ( 
        <>
            <div id={sections.start.id} className="wall-container">
                <div className="wall">
                    <div>
                        <p className="name-text theta-gradient">Elvis Carrasco</p>
                        <p className="dev-text">Software Developer</p>
                    </div>
                    <div className="mouse"></div>
                </div>
            </div>
        </>
    );
}

export default Start;