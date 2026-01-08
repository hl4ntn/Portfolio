import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-dots',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dots.component.html',
  styleUrl: './dots.component.scss'
})
export class DotsComponent {

  diamontColors = ['yellow','yellow','yellow','yellow','yellow', 'orange'];

  constructor(public pageService: PagesService) {
    
  }

}
