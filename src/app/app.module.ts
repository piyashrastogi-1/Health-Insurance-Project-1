import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsInfoComponent } from './cards-info/cards-info.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { PlansComponent } from './plans/plans.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

// FireBase Settings
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutUsComponent } from './about-us/about-us.component';
import { SitemapComponent } from './nav/sitemap/sitemap.component';
import { CareersComponent } from './nav/careers/careers.component';
import { LegalComponent } from './nav/legal/legal.component';
import { InsuaranceCompaniesComponent } from './nav/insuarance-companies/insuarance-companies.component';
import { ArticleComponent } from './nav/article/article.component';
import { ContactusComponent } from './nav/contactus/contactus.component';
import { KnowYourAdvisorComponent } from './nav/know-your-advisor/know-your-advisor.component';
import { NewsroomComponent } from './nav/newsroom/newsroom.component';
import { FamilyHealthInsuranceComponent } from './family-health-insurance/family-health-insurance.component';
import { CoronavirusHealthIsuranceComponent } from './coronavirus-health-isurance/coronavirus-health-isurance.component';
import { HealthInsuranceClaimComponent } from './health-insurance-claim/health-insurance-claim.component';
import { ChildHealthInsuranceComponent } from './child-health-insurance/child-health-insurance.component';
import { SeniorCitizenHealthInsuranceComponent } from './senior-citizen-health-insurance/senior-citizen-health-insurance.component';
import { ArogyaSanjeevaniPolicyComponent } from './arogya-sanjeevani-policy/arogya-sanjeevani-policy.component';
import { CriticalIllnessPolicyComponent } from './critical-illness-policy/critical-illness-policy.component';
import { ProfileComponent } from './profile/profile.component';
import { CoronaPlansComponent } from './corona-plans/corona-plans.component';
import { SeniorPlansComponent } from './senior-plans/senior-plans.component';
import { FamilyPlansComponent } from './family-plans/family-plans.component';
import { CriticalPlansComponent } from './critical-plans/critical-plans.component';
import { ArogyaPlansComponent } from './arogya-plans/arogya-plans.component';
import { ChildPlansComponent } from './child-plans/child-plans.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsInfoComponent,
    FooterComponent,
    FormComponent,
    HeaderComponent,
    MainComponent,
    PlansComponent,
    SignupComponent,
    LoginComponent,
    AboutUsComponent,
    SitemapComponent,
    CareersComponent,
    LegalComponent,
    InsuaranceCompaniesComponent,
    ArticleComponent,
    ContactusComponent,
    KnowYourAdvisorComponent,
    NewsroomComponent,
    FamilyHealthInsuranceComponent,
    CoronavirusHealthIsuranceComponent,
    HealthInsuranceClaimComponent,
    ChildHealthInsuranceComponent,
    SeniorCitizenHealthInsuranceComponent,
    ArogyaSanjeevaniPolicyComponent,
    CriticalIllnessPolicyComponent,
    ProfileComponent,
    CoronaPlansComponent,
    SeniorPlansComponent,
    FamilyPlansComponent,
    CriticalPlansComponent,
    ArogyaPlansComponent,
    ChildPlansComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
