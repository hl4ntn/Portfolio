import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PagesService } from './pages.service';
import { trigger, transition, style, animate, query, group } from '@angular/animations';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    ]
})
export class AppComponent{

  title = 'Portfolio';
//  isAnimating = false;
//   getRouteState() {
//     return location.pathname;
//   }

  //  prepareRoute(outlet: RouterOutlet) {
  //   return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  // }




  constructor(public pageService: PagesService) {
      
    }

  

  ngOnInit(){
    this.pageService.goToPage(0);
    window.addEventListener('wheel', this.handleScroll, { passive: false });
  }

// ngAfterViewInit() {
//   setTimeout(() => {
//     this.pageService.goToPage(0);
//   });
//   window.addEventListener('wheel', this.handleScroll, { passive: false });
// }
//   ngAfterViewInit() {
   
//     console.log('AfterViewInit läuft');
//     const elements = document.querySelectorAll('.box');
//   console.log('Boxes:', elements.length);
// //  const elements = document.querySelectorAll('.animate-on-load');
//     elements.forEach(el => el.classList.add('is-visible'));
 
// }


  handleScroll = (event: WheelEvent) => {
    event.preventDefault();
    //  if (this.isAnimating) return;

    //  this.isAnimating = true;

     if (event.deltaY > 0) {
       this.pageService.goToPage(this.pageService.currentPage + 1);
    } else {
      this.pageService.goToPage(this.pageService.currentPage - 1);
    }

  //   setTimeout(() => {
  //   this.isAnimating = false;
  // }, 800); 
  };

  //  prepareRoute(outlet: RouterOutlet) {
  //   return outlet?.activatedRouteData?.['animation'] ?? null;
  // }

  

} 
    
