import { ApiModelsMaxLength } from './api.model.max.length';

import { Validators, FormControl, AbstractControl } from "@angular/forms";

export class FieldValidators {

    static nameValidators(){
        return [
            Validators.required, 
            Validators.maxLength(ApiModelsMaxLength.sNameMaxLength)]
    }

    static emailValidators(){
        return [
            Validators.required, 
            Validators.email,
            Validators.maxLength(ApiModelsMaxLength.sEmailMaxLength)]
    }


    static requiredNumberValidators(){
        return [
            Validators.required, 
            Validators.maxLength(ApiModelsMaxLength.sRequiredNumberMaxLength)]
    }

    static password1Validators(){
        return [
            Validators.required, 
            Validators.maxLength(30),
            Validators.minLength(ApiModelsMaxLength.sPasswordMinLength)]
    }

    // TODO - Use this to validate amounts
    static amountValidators(isRequired: boolean = true){

        let validators = [
            FieldValidators.validateAmount,
            Validators.max(ApiModelsMaxLength.sMaxAllowedAmount),
            Validators.min(1)
        ]

        if (isRequired) validators.push(Validators.required);
        
        return validators;
        
    }

    static validateAmount(control: FormControl): {[s: string]: boolean}{

        if(isNaN(control.value)){
            return {'notValidAmount': true};
        }
        return null;
    }

}


export const minLengthArray = (min: number) => {
    return (c: AbstractControl): {[key: string]: any} => {
      if (c.value.length >= min)
        return null;
  
      return { MinLengthArray: true};
    }
}

