import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PagesService } from './pages.service';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ReferencesComponent } from './references/references.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { CoreCompetenciesComponent } from './core-competencies/core-competencies.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { trigger, transition, style, animate, query, group } from '@angular/animations';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LandingPageComponent, AboutMeComponent, ReferencesComponent, LegalNoticeComponent, MyWorkComponent, CoreCompetenciesComponent, CallToActionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    ]
})
export class AppComponent{

  title = 'Portfolio';
  constructor(public pageService: PagesService) {  
    }

  ngOnInit(){
    this.pageService.goToPage(0);
 
  }


  handleScroll = (event: WheelEvent) => {
    event.preventDefault();


     if (event.deltaY > 0) {
       this.pageService.goToPage(this.pageService.currentPage + 1);
    } else {
      this.pageService.goToPage(this.pageService.currentPage - 1);
    }

  };


} 
    
