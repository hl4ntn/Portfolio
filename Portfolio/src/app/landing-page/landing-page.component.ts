import { AfterViewInit, Component } from '@angular/core';
import { PagesService } from '../pages.service';
import { DotsComponent } from '../dots/dots.component';
import { NavbarComponent1 } from '../navbar/navbar.component';


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [DotsComponent, NavbarComponent1],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements AfterViewInit {
  constructor(public pageService: PagesService){

  }

   ngAfterViewInit() {
    const el = document.getElementById('0');
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.pageService.currentPage = 0;
          console.log('Page 0 ist sichtbar');
          history.replaceState(null, "", `#${'HLA'}`);
        }
      },
      { threshold: 0.6 }
    );
    observer.observe(el);
  }

}


