export interface FormFieldError {
    message: string 
}

export interface FormError {
    [key: string]: FormFieldError
}

export const errorMessages = {
    empty: "This field can't be empty",
    moreThan: "Add more than 2 characters",
}