import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-view-store',
  templateUrl: './view-store.component.html',
  styleUrls: ['./view-store.component.scss']
})
export class ViewStoreComponent {

  enableddata=false;
  has_mpesadata=false;

  enabled?: boolean;
  min_sale_value?: string;
  days_to_go_back?: string;
  franchisee_fee?: string;
  mwingi_costs?: string;
  shop_rent?: string;
  name?: string;
  reg_no?: string;
  has_mpesa?: boolean;
  store_back_date?: string;
  employee_name?: string;


  constructor(
     private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

   
  }

 

}
