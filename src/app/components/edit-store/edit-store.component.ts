import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-store',
  templateUrl: './edit-store.component.html',
  styleUrls: ['./edit-store.component.scss']
})
export class EditStoreComponent {

  isLoading = true;
  error: any = null;
  weHaveError: boolean = false;

  // We need to know if it's income statement view so that we can show different
    // values
    isIncomeStateView = false;
  // Form error message variables
    minSaleValueErrorMessage: string | null = null;
    daysToGoBackErrorMessage: string | null = null;
    shopRentErrorMessage: string | null = null;

  /**
   * Called when enabled checkbox has been checked
   * @param checked - A flag indicating if field has been checked
   */

  // Form general details
  formDetails = {
    formTitle: "Edit store",
    formButtonText: "Save"
  }

  // Form field value description variables
  readonly formValueDescs = {
    enabledFormFieldName: 'Enabled',
    minSaleValueFormFieldName: 'Min sale value',
    daysToGoBackFormFieldName: 'Days to go back',
    shopRentFormFieldName: 'Shop rent'
}

viewModelHolder = {
  name: '',
  enabled: false,
  minSaleValue: '',
  regNo: '',
  daysToGoBack: '',
  shopRent: '',
}

  storeEditForm:any = FormGroup;

   
  //Chage in check box method
  onEnabledCheckBoxChanged(checked: boolean){
  this.viewModelHolder.enabled = checked;
  }

  //Submit updated details
  onSubmit() {}

}
