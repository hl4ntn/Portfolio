import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PagesService } from './pages.service';
import { trigger, transition, style, animate, query, group } from '@angular/animations';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <router-outlet></router-outlet>
  `,
  styleUrl: './app.component.scss',
  animations: [
  trigger('routeAnimation', [
    transition('* => *', [
      style({ opacity: 0 }),
      animate('600ms ease', style({ opacity: 1 }))
    ])
  ])
  ]})

export class AppComponent {

  title = 'Portfolio';

  getRouteState() {
    return location.pathname;
  }

  constructor(public pageService: PagesService) {
      
    }

  ngOnInit(){
    this.pageService.goToPage(0);
    window.addEventListener('wheel', this.handleScroll, { passive: false });
  }

 isAnimating = false;

  handleScroll = (event: WheelEvent) => {
    event.preventDefault();
     if (this.isAnimating) return;

     this.isAnimating = true;

     if (event.deltaY > 0) {
       this.pageService.goToPage(this.pageService.currentPage + 1);
    } else {
      this.pageService.goToPage(this.pageService.currentPage - 1);
    }

    setTimeout(() => {
    this.isAnimating = false;
  }, 500); 
  };

} 
    
