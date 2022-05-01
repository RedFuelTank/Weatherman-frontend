import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProfileComponent} from "./profile/profile.component";
import {ComparisonTableComponent} from "./comparison/comparison-table/comparison-table.component";
import {RegistrationFormComponent} from "./registration-form/registration-form.component";
import {LoginFormComponent} from "./login-form/login-form.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'comparing', component: ComparisonTableComponent},
  { path: 'login', component: LoginFormComponent},
  { path: 'register', component: RegistrationFormComponent},
  { path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
