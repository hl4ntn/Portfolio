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
  constructor(public pageService: PagesService) {
    
  }

}
