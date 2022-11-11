import { ChangeEvent } from 'react'
import { FormFieldError } from '../core/types'

interface FormFieldProps {
    id: string 
    label: string 
    disabled: boolean
    error: FormFieldError | null
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const FormField = ({ id, label, disabled, error, onChange }: FormFieldProps) => {
    const selectCss = () => {
        const baseCss = 'input-text'

        if (disabled) return baseCss + ' disabled-input'
        if (error) return baseCss + ' error-input'

        return baseCss
    }

    return (
        <div className="form-field">
            <label 
                className="input-label" 
                htmlFor={id}>{label}</label>
            <input 
                onChange={onChange}
                className={selectCss()}
                id={id} 
                type="text" />
        </div>
    )
}

export default FormField