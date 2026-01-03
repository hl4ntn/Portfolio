import { Component, OnInit } from '@angular/core';
import { DotsComponent } from '../dots/dots.component';
import { NavbarComponent1 } from '../navbar/navbar.component';
import * as AOS from 'aos';

@Component({
  selector: 'app-call-to-action',
  standalone: true,
  imports: [NavbarComponent1, DotsComponent],
  templateUrl: './call-to-action.component.html',
  styleUrl: './call-to-action.component.scss'
})
export class CallToActionComponent  implements OnInit{
 ngOnInit(): void {
      AOS.init({
        duration: 800,
        once: true
      });
    }
}
