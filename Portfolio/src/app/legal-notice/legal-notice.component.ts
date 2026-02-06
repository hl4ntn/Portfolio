import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {
  constructor(public pageService: PagesService){

  }

}
