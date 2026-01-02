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
    <div [@routeAnimations]="prepareRoute(outlet)">
      <router-outlet #outlet="outlet"></router-outlet>
    </div>
  `,
  styleUrl: './app.component.scss',
  animations: [
  trigger('routeAnimations', [
      transition('* <=> *', [
        // Alte Seite nach oben raus
        query(':enter, :leave', style({ position: 'absolute', width: '100%' }), { optional: true }),
        group([
          query(':leave', [
            animate('0.8s cubic-bezier(0.22, 1, 0.36, 1)',
              style({ transform: 'translateY(-100vh)', opacity: 0 }))
          ], { optional: true }),
          query(':enter', [
            style({ transform: 'translateY(100vh)', opacity: 0 }),
            animate('0.8s cubic-bezier(0.22, 1, 0.36, 1)',
              style({ transform: 'translateY(0)', opacity: 1 }))
          ], { optional: true })
        ])
      ])
    ])
    ]
})
export class AppComponent {

  title = 'Portfolio';
 isAnimating = false;
  getRouteState() {
    return location.pathname;
  }

  //  prepareRoute(outlet: RouterOutlet) {
  //   return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  // }




  constructor(public pageService: PagesService) {
      
    }

  // ngOnInit(){
  //   this.pageService.goToPage(0);
  //   window.addEventListener('wheel', this.handleScroll, { passive: false });
  // }

ngAfterViewInit() {
  setTimeout(() => {
    this.pageService.goToPage(0);
  });
  window.addEventListener('wheel', this.handleScroll, { passive: false });
}
//   ngAfterViewInit() {
   
//     console.log('AfterViewInit läuft');
//     const elements = document.querySelectorAll('.box');
//   console.log('Boxes:', elements.length);
// //  const elements = document.querySelectorAll('.animate-on-load');
//     elements.forEach(el => el.classList.add('is-visible'));
 
// }


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
  }, 800); 
  };

   prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'] ?? null;
  }

  

} 
    
