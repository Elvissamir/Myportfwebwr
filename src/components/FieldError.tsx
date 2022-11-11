import { FormFieldError } from "../core/types"
import ErrorIcon from "./icons/ErrorIcon"

interface FieldErrorProps {
    error: FormFieldError
}

const FieldError = ({ error }: FieldErrorProps) => {
    return (
        <div className='field-error'>
            <ErrorIcon />
            <p className="error-text">{error.message}</p>
        </div>
    )
}

export default FieldError