import { FormError, FormFieldError } from "../core/types"

interface UseHandleFormErrorProps {
    errors: FormError
    setErrors: React.Dispatch<React.SetStateAction<FormError>>
}

interface SingleError {
    field: string 
    error: FormFieldError | null
}

const useHandleFormError = ({ errors, setErrors }: UseHandleFormErrorProps) => {
    const handleSingleError = ({ field, error}: SingleError) => {
        const nerrors = {...errors}
        if (error) {
            nerrors[field] = error

            return setErrors(nerrors)
        }

        delete nerrors[field]
        setErrors(nerrors)
    }

    return {
        handleSingleError
    }
}

export default useHandleFormError