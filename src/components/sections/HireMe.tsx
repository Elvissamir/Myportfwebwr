import sections from "../../core/sections"

const HireMeBanner = () => {
    return (
        <div className="hire-me-container">
            <div className="hire-me">
                <p className="hire-me-text">Want to hire Me?</p>
                <a className="action-btn" href={sections.contact.url}>
                    Let's talk!
                </a>
            </div>
        </div>
    )
}

export default HireMeBanner