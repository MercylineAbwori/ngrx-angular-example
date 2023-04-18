import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from './auth.guard';
import { PageTitles } from '../core/page_titles';

const authRoutes: Routes = [
    {
        canActivate: [AuthGuard],
        path: 'logout', component: LogoutComponent,
        title: PageTitles.logoutTitle()
    },
    {
        path: 'login', 
        component: LoginComponent,
        title: PageTitles.loginTitle()
    }
];

@NgModule({
  imports: [
    RouterModule.forRoot(authRoutes, { scrollPositionRestoration: 'enabled' })
  ],
  exports: [RouterModule]
})
export class AccountsRoutingModule {}
