import { Component, OnInit } from '@angular/core';
import { DotsComponent } from '../dots/dots.component';
import { NavbarComponent1 } from '../navbar/navbar.component';
import * as AOS from 'aos';

@Component({
  selector: 'app-core-competencies',
  standalone: true,
  imports: [NavbarComponent1, DotsComponent],
  templateUrl: './core-competencies.component.html',
  styleUrl: './core-competencies.component.scss'
})
export class CoreCompetenciesComponent implements OnInit {
 ngOnInit(): void {
      AOS.init({
        duration: 800,
        once: true
      });
    }
}
