import { Component } from '@angular/core';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { AboutMeComponent } from "../about-me/about-me.component";
import { CallToActionComponent } from "../call-to-action/call-to-action.component";
import { CoreCompetenciesComponent } from "../core-competencies/core-competencies.component";
import { MyWorkComponent } from "../my-work/my-work.component";
import { ReferencesComponent } from "../references/references.component";

@Component({
  selector: 'app-maincomponent',
  standalone: true,
  imports: [LandingPageComponent, AboutMeComponent, CallToActionComponent, CoreCompetenciesComponent, MyWorkComponent, ReferencesComponent],
  templateUrl: './maincontent.component.html',
  styleUrl: './maincontent.component.scss'
})
export class MaincontentComponent {

}
