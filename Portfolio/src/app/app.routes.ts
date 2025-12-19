import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutMeComponent } from "./about-me/about-me.component";
import { LegalNoticeComponent } from "./legal-notice/legal-notice.component";
import { CallToActionComponent } from "./call-to-action/call-to-action.component";
import { CoreCompetenciesComponent } from "./core-competencies/core-competencies.component";
import { MyWorkComponent } from "./my-work/my-work.component";
import { ReferencesComponent } from "./references/references.component";

export const routes: Routes = [
 { path: '', component: LandingPageComponent },
  { path: 'about', component: AboutMeComponent },
  { path: 'Competencies', component: CoreCompetenciesComponent },
  { path: 'work', component: MyWorkComponent },
  { path: 'references', component: ReferencesComponent },
  { path: 'callToAction', component: CallToActionComponent },
   { path: 'legal', component: LegalNoticeComponent }
];