import { AfterViewInit, Component } from '@angular/core';
import { DotsComponent } from '../dots/dots.component';
import { NavbarComponent1 } from '../navbar/navbar.component';


@Component({
  selector: 'app-core-competencies',
  standalone: true,
  imports: [NavbarComponent1, DotsComponent],
  templateUrl: './core-competencies.component.html',
  styleUrl: './core-competencies.component.scss'
})
export class CoreCompetenciesComponent implements AfterViewInit {
 ngAfterViewInit() {
    const el = document.getElementById('2');
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log('Page 2 ist sichtbar');
        }
      },
      { threshold: 0.6 }
    );
    observer.observe(el);
  }
}
