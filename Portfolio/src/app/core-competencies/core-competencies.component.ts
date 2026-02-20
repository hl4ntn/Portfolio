import { AfterViewInit, Component } from '@angular/core';
import { DotsComponent } from '../dots/dots.component';
import { NavbarComponent1 } from '../navbar/navbar.component';
import { PagesService } from '../pages.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-core-competencies',
  standalone: true,
  imports: [NavbarComponent1, DotsComponent, CommonModule],
  templateUrl: './core-competencies.component.html',
  styleUrl: './core-competencies.component.scss'
})



export class CoreCompetenciesComponent implements AfterViewInit {
   constructor(public pageService: PagesService) {  
    }
    
    isHovered = false;
 
    ngAfterViewInit() {
    const el = document.getElementById('2');
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.pageService.currentPage = 2;
          console.log('Page 2 ist sichtbar');
          history.replaceState(null, "", `#${'competencies'}`);
        }
      },
      { threshold: 0.6 }
    );
    observer.observe(el);
  }
}
