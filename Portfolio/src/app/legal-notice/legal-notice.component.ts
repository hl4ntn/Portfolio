import { Component } from '@angular/core';
import { NavbarComponent1 } from '../navbar/navbar.component';


@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [NavbarComponent1],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {

}
