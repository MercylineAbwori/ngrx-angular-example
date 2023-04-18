import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLoginComponent } from './components/auth-login/auth-login.component';
import { EditStoreComponent } from './components/edit-store/edit-store.component';
import { StoreListComponent } from './components/store-list/store-list.component';
import { ViewStoreComponent } from './components/view-store/view-store.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth-login',
    pathMatch: 'full',
  }, 
  {
    path: 'auth-login',
    component: AuthLoginComponent,

  },
  {
    path: 'edit-store',
    component: EditStoreComponent,
  },
  { 
    path: 'store-list',
    component: StoreListComponent,
  },
  { 
    path: 'view-store',
    component: ViewStoreComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
