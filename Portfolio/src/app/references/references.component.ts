import { Component, OnInit } from '@angular/core';
import { DotsComponent } from '../dots/dots.component';
import { NavbarComponent1 } from '../navbar/navbar.component';
import * as AOS from 'aos';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [NavbarComponent1, DotsComponent],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent implements OnInit {

   ngOnInit(): void {
        AOS.init({
          duration: 800,
          once: true
        });
      }

}
