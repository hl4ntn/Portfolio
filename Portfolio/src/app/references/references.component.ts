import { AfterViewInit, Component } from '@angular/core';
import { DotsComponent } from '../dots/dots.component';
import { NavbarComponent1 } from '../navbar/navbar.component';
import { PagesService } from '../pages.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [NavbarComponent1, DotsComponent, CommonModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent implements AfterViewInit {

   constructor(public pageService: PagesService) {  
    }

  ngAfterViewInit() {
    const el = document.getElementById('4');
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.pageService.currentPage = 4;
          console.log('Page 4 ist sichtbar');
          history.replaceState(null, "", `#${'references'}`);
        }
      },
      { threshold: 0.6 }
    );
    observer.observe(el);
  }

}
