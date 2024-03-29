import { ChangeEvent } from 'react'
import { FormFieldError } from '../core/types'
import FieldError from './FieldError'

interface FormFieldProps {
    id: string 
    label: string 
    disabled: boolean
    inputType: 'input-text' | 'textarea'
    error: FormFieldError | null
    value: string 
    onChange: (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void
}

const FormField = ({ id, label, inputType, value, disabled, error, onChange }: FormFieldProps) => {
    const selectCss = () => {
        const baseCss = inputType === 'input-text'? 'input-text' : 'input-area'

        if (disabled) return baseCss + ' disabled-input'
        if (error) return baseCss + ' input-error'

        return baseCss
    }

    return (
        <div className="form-field">
            <label 
                className="input-label" 
                htmlFor={id}>{label}</label>
            { inputType === 'input-text' &&
                <input 
                    onChange={onChange}
                    className={selectCss()}
                    value={value}
                    disabled={disabled}
                    id={id} 
                    type="text" />}
            { inputType === 'textarea' && 
                <textarea 
                    onChange={onChange}
                    className={selectCss()} 
                    disabled={disabled}
                    value={value}
                    id={id} />}
            { error && <FieldError error={error} />}
        </div>
    )
}

export default FormField