import { Component, OnInit } from '@angular/core';
import { DotsComponent } from '../dots/dots.component';
import { NavbarComponent1 } from '../navbar/navbar.component';
import * as AOS from 'aos';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [NavbarComponent1, DotsComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})

export class AboutMeComponent  implements OnInit {




 ngOnInit(): void {
      AOS.init({
        duration: 800,
        once: true
      });
    }


}
