import { AfterViewInit, Component } from '@angular/core';
import { DotsComponent } from '../dots/dots.component';
import { NavbarComponent1 } from '../navbar/navbar.component';


@Component({
  selector: 'app-references',
  standalone: true,
  imports: [NavbarComponent1, DotsComponent],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent implements AfterViewInit {

  ngAfterViewInit() {
    const el = document.getElementById('4');
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log('Page 4 ist sichtbar');
        }
      },
      { threshold: 0.6 }
    );
    observer.observe(el);
  }

}
