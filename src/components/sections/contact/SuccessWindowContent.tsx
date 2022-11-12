import ThumbsIcon from "../../icons/ThumbsIcon"

const SuccessWindowContent = () => {
    return (
        <div className="success-window-content">
            <div className="icon-container">
                <ThumbsIcon />
            </div>
            <p className="message-bold">Thanks</p>
            <p className="message-text">I'll reach out to you as soon as possible!</p>
        </div>
    )
}

export default SuccessWindowContent