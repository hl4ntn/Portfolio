import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { LegalNoticeComponent } from "./legal-notice/legal-notice.component";
import { CallToActionComponent } from "./call-to-action/call-to-action.component";
import { CoreCompetenciesComponent } from "./core-competencies/core-competencies.component";
import { MyWorkComponent } from "./my-work/my-work.component";
import { ReferencesComponent } from "./references/references.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LandingPageComponent, AboutMeComponent, LegalNoticeComponent, CallToActionComponent, CoreCompetenciesComponent, MyWorkComponent, ReferencesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio';
}
