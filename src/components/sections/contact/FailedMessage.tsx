import ErrorIcon from "../../icons/ErrorIcon"

const FailedMessage = () => {
    return (
        <>
            <ErrorIcon />
            <p className="failed-message">Something went wrong.</p>
        </>
    )
}

export default FailedMessage