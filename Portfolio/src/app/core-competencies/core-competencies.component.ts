import { Component } from '@angular/core';
import { DotsComponent } from '../dots/dots.component';
import { NavbarComponent1 } from '../navbar/navbar.component';

@Component({
  selector: 'app-core-competencies',
  standalone: true,
  imports: [NavbarComponent1, DotsComponent],
  templateUrl: './core-competencies.component.html',
  styleUrl: './core-competencies.component.scss'
})
export class CoreCompetenciesComponent {

}
