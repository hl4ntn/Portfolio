import { AfterViewInit, Component } from '@angular/core';
import { DotsComponent } from '../dots/dots.component';
import { NavbarComponent1 } from '../navbar/navbar.component';


@Component({
  selector: 'app-call-to-action',
  standalone: true,
  imports: [NavbarComponent1, DotsComponent],
  templateUrl: './call-to-action.component.html',
  styleUrl: './call-to-action.component.scss'
})
export class CallToActionComponent implements AfterViewInit {
 ngAfterViewInit() {
    const el = document.getElementById('5');
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log('Page 5 ist sichtbar');
        }
      },
      { threshold: 0.6 }
    );
    observer.observe(el);
  }
}
