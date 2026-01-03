import { AfterViewInit, Component } from '@angular/core';
import { DotsComponent } from '../dots/dots.component';
import { NavbarComponent1 } from '../navbar/navbar.component';


@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [NavbarComponent1, DotsComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})

export class AboutMeComponent implements AfterViewInit {
 ngAfterViewInit() {
    const el = document.getElementById('1');
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log('Page 1 ist sichtbar');
        }
      },
      { threshold: 0.6 }
    );
    observer.observe(el);
  }




}
