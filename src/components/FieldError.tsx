import { FormFieldError } from "../core/types"

interface FieldErrorProps {
    error: FormFieldError
}

const FieldError = ({ error }: FieldErrorProps) => {
    return (
        <div className='field-error'>{error.message}</div>
    )
}

export default FieldError