import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { StoreListComponent } from './components/store-list/store-list.component';
import { EditStoreComponent } from './components/edit-store/edit-store.component';
import { ViewStoreComponent } from './components/view-store/view-store.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthLoginComponent } from './components/auth-login/auth-login.component';



@NgModule({
  declarations: [
    AppComponent,
    StoreListComponent,
    EditStoreComponent,
    ViewStoreComponent,
    LogoutComponent,
    AuthLoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
