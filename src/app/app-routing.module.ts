import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { MainComponent } from './main/main.component';
import { PlansComponent } from './plans/plans.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';



const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  
  {
    path: 'login/signup',
   component: SignupComponent
  },
  {
    path: 'home/plans-form',
   component: FormComponent
  },
  {
    path:'home/plans-form/plans',
    component:PlansComponent
  },
    {
      path:'home',
      component:MainComponent,
      // canActivate: [UserGuard] 
    },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'**',
    redirectTo:'home',
    pathMatch:'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
