import AboutPhoto from "./AboutPhoto"

const AboutHeader = () => {
    return (
        <div className="about-header">
            <AboutPhoto />
            <div className="text-container">
                <p className="text-header">Hey, I'm Elvis, a Venezuelan software engineer.!</p>
                <p className="text">
                    I enjoy learning new things, reading, running, listening to music and cooking. 
                </p>
            </div>
        </div>
    )
}

export default AboutHeader