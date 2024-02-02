import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewProjectComponent } from './components/new-project/new-project.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  
  { path: 'home', component: HomeComponent },
  { path: 'auth', loadChildren: () => import('./components/login-signup/login-signup.module').then(m => m.LoginSignupModule) },
  { path: 'new-project', loadChildren: () => import('./components/new-project/new-project.module').then(m => m.NewProjectModule) },
  { path: 'profile', loadChildren: () => import('./components/new-project/new-project.module').then(m => m.NewProjectModule) },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
