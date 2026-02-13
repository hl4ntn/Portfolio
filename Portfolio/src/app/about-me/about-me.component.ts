import { AfterViewInit, Component } from '@angular/core';
import { DotsComponent } from '../dots/dots.component';
import { NavbarComponent1 } from '../navbar/navbar.component';
import { PagesService } from '../pages.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [NavbarComponent1, DotsComponent, CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})

export class AboutMeComponent implements AfterViewInit {
  constructor(public pageService: PagesService) {  
    }

    isHovered = false;

 ngAfterViewInit() {
    const el = document.getElementById('1');
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.pageService.currentPage = 1;
          console.log('Page 1 ist sichtbar');
          history.replaceState(null, "", `#${'aboutme'}`);
        }
      },
      { threshold: 0.6 }
    );
    observer.observe(el);
  }




}
