import { ApiModelsMaxLength } from "./api.model.max.length";

export class FormHelpers {
    /**
     * Returns a field error if i'ts in the provided errors
     * @param fieldName - Field name
     * @param errors - Form errors 
     */
    static getErrorIfInField(fieldName: string, errors) {
        return fieldName in errors ? errors[fieldName] : null
    }

    /**
     * Puts a field error message together depending on the provided values
     * @param errors - Form value's errors
     * Return error messsage description or null if the field has no errors
     */
    static liveFieldErrorDisplayForPassword1(errors): string {

        const fieldNameDesc = "Password";
        const maxLength = ApiModelsMaxLength.sPasswordMaxLength;
        const minLength = ApiModelsMaxLength.sPasswordMinLength;

        if (errors) {

            if ('required' in errors) {
                return `${fieldNameDesc} cannot be empty`;

            } else if ('maxlength' in errors) {
                return `${fieldNameDesc} cannot be more than ${maxLength} characters long`;

            } else if ('minlength' in errors) {
                return `${fieldNameDesc} cannot be less than ${minLength} characters long`;
            }
        }

        return null;
    }

    /**
     * Puts a field error message together depending on the provided values
     * @param fieldNameDesc - Field value desc
     * @param errors - Form value's errors
     * Return error messsage description or null if the field has no errors
     */
    static liveFieldErrorDisplayForPercentage(
        fieldNameDesc: string,
        errors): string | null {

        if (errors) {

            if ('required' in errors) {
                return `${fieldNameDesc} cannot be empty`;
            }else if ('max' in errors) {
                return `${fieldNameDesc} cannot be more than 100`;
            }else if ('min' in errors) {
                return `${fieldNameDesc} cannot be less than 0.1`;
            }
        }

        return null;
    }

    /**
     * Puts a field error message together depending on the provided values
     * @param fieldName - Field value identificaton name
     * @param fieldNameDesc - Field value desc
     * @param maxLength - Field value max length
     * @param errors - Form value's errors
     * Return error messsage description or null if the field has no errors
     */
    static liveFieldErrorDisplay(
        fieldNameDesc: string,
        maxLength: number,
        errors,
        stringValue = true): string {

        if (errors) {

            if ('required' in errors) {
                return `${fieldNameDesc} cannot be empty`;

            } else if ('maxlength' in errors) {

                if (stringValue) {
                    return `${fieldNameDesc} cannot be more than ${maxLength} characters long`;

                } else {
                    return `${fieldNameDesc} cannot have more than ${maxLength} digits`;
                }

            } else if ('minlength' in errors) {

                if (stringValue) {
                    return `${fieldNameDesc} cannot be less than ${maxLength} characters long`;

                } else {
                    return `${fieldNameDesc} cannot have less than ${maxLength} digits`;
                }

            } else if ('email' in errors) {
                return 'Enter a valid Email address';

            } else if ('notValidNumber' in errors) {
                return 'Enter a valid number';

            } else if ('notValidPhone' in errors) {
                return 'Enter a valid phone number';
            }

        }

        return null;
    }

}