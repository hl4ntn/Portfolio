import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PagesService } from './pages.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <router-outlet></router-outlet>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'Portfolio';

  constructor(public pageService: PagesService) {
      
    }

  ngOnInit(){
    window.addEventListener('wheel', this.handleScroll, { passive: false });
  }

 

  handleScroll = (event: WheelEvent) => {
    event.preventDefault();
     if (event.deltaY > 0) {
       this.pageService.goToPage(this.pageService.currentPage + 1);
    } else {
      this.pageService.goToPage(this.pageService.currentPage - 1);
    }
  };

} 
    
