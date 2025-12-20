import { Component } from '@angular/core';
import { DotsComponent } from '../dots/dots.component';
import { NavbarComponent1 } from '../navbar/navbar.component';

@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [NavbarComponent1, DotsComponent],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.scss'
})
export class MyWorkComponent {

}
