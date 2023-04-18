
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { AccountsRoutingModule } from './accounts-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent,
    
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AccountsRoutingModule,
    SharedModule
  ]
})
export class AccountsModule {}
