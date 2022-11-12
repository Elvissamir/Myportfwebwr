interface SendBtnProps {
    text: string 
    loading: boolean 
    disabled: boolean 
    sendMessage: () => void
}

const SendMessageBtn = ({ text, loading, disabled, sendMessage }: SendBtnProps) => {
    return (
        <button 
            onClick={sendMessage}
            disabled={loading || disabled}
            className={loading || disabled? 'action-btn disabled-btn' : 'action-btn'}
            type='button'>
                {loading? <div className="white-loader"></div> : text }
        </button>
    )
}

export default SendMessageBtn