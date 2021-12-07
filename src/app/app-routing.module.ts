import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { MainComponent } from './main/main.component';
import { PlansComponent } from './plans/plans.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ArticleComponent } from './nav/article/article.component';
import { CareersComponent } from './nav/careers/careers.component';
import { ContactusComponent } from './nav/contactus/contactus.component';
import { InsuaranceCompaniesComponent } from './nav/insuarance-companies/insuarance-companies.component';
import { KnowYourAdvisorComponent } from './nav/know-your-advisor/know-your-advisor.component';
import { LegalComponent } from './nav/legal/legal.component';
import { NewsroomComponent } from './nav/newsroom/newsroom.component';
import { SitemapComponent } from './nav/sitemap/sitemap.component';
import { ChildHealthInsuranceComponent } from './child-health-insurance/child-health-insurance.component';
import { CoronavirusHealthIsuranceComponent } from './coronavirus-health-isurance/coronavirus-health-isurance.component';
import { FamilyHealthInsuranceComponent } from './family-health-insurance/family-health-insurance.component';
import { HealthInsuranceClaimComponent } from './health-insurance-claim/health-insurance-claim.component';
import { SeniorCitizenHealthInsuranceComponent } from './senior-citizen-health-insurance/senior-citizen-health-insurance.component';
import { ArogyaSanjeevaniPolicyComponent } from './arogya-sanjeevani-policy/arogya-sanjeevani-policy.component';
import { CriticalIllnessPolicyComponent } from './critical-illness-policy/critical-illness-policy.component';
import { ProfileComponent } from './profile/profile.component';
import { CoronaPlansComponent } from './corona-plans/corona-plans.component';
import { FamilyPlansComponent } from './family-plans/family-plans.component';
import { SeniorPlansComponent } from './senior-plans/senior-plans.component';
import { CriticalPlansComponent } from './critical-plans/critical-plans.component';
import { ArogyaPlansComponent } from './arogya-plans/arogya-plans.component';
import { ChildPlansComponent } from './child-plans/child-plans.component';



const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'profile',
    component:ProfileComponent

  },
  {
    path:'home/arogya-sanjeevani',
    component:ArogyaSanjeevaniPolicyComponent
  },
  {
    path:'home/critical',
    component:CriticalIllnessPolicyComponent
  },
  
  {
    path:'home/child-health',
    component:ChildHealthInsuranceComponent
  },
  {
    path:'home/child-health/plans',
    component:PlansComponent
  },
  {
    path:'home/coronavirusHealth',
    component:CoronavirusHealthIsuranceComponent
  },
  {
    path:'home/coronavirusHealth/plans',
    component:PlansComponent
  },
  {
    path:'home/family-health',
    component:FamilyHealthInsuranceComponent
  },
  {
    path:'home/family-health/plans',
    component:PlansComponent
  },
  {
    path:'home/health-insurance',
    component:HealthInsuranceClaimComponent
  },
  {
    path:'home/health-insurance/plans',
    component:PlansComponent
  },
  {
    path: 'home/senior-insurance',
   component: SeniorCitizenHealthInsuranceComponent
  },
  {
    path: 'home/senior-insurance/plans',
   component: PlansComponent
  },
  {
    path: 'signup',
   component: SignupComponent
  },
  {
    path: 'login/signup',
   component: SignupComponent
  },

  {
    path:'contactus/login',
    component:LoginComponent
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
  // {
  //   path:'**',
  //   redirectTo:'home',
  //   pathMatch:'full'
  // },
  {
    path:'about',
    component:AboutUsComponent
  },
  {
    path:'article',
    component:ArticleComponent
  },
  {
    path:'careers',
    component:CareersComponent
  },
  {
    path:'contactus',
    component:ContactusComponent
  },
  {
    path:'insurance-companies',
    component:InsuaranceCompaniesComponent
  },
  {
    path:'know-your-advisor',
    component:KnowYourAdvisorComponent
  },
  {
    path:'legal',
    component:LegalComponent
  },
  {
    path:'newsroom',
    component:NewsroomComponent
  },
  {
    path:'sitmap',
    component:SitemapComponent
  },
  {
    path:'home/coronavirusHealth/corona-plans',
    component:CoronaPlansComponent
  },
  {
    path:'home/family-health/family-plans',
    component:FamilyPlansComponent,

  },
  {
    path:'home/senior-insurance/senior-plans',
    component:SeniorPlansComponent
  },
  {
    path:'home/critical/critical-plans',
    component:CriticalPlansComponent
  },
  {
    path:'home/arogya-sanjeevani/arogya-plans',
    component:ArogyaPlansComponent
  },
  {
    path:'home/child-health/child-plans',
    component:ChildPlansComponent
  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
