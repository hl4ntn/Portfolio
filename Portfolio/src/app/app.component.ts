import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PagesService } from './pages.service';




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
  constructor(public pageService: PagesService) {  
    }

  ngOnInit(){
    // this.pageService.goToPage(0);
 
  }


  // handleScroll = (event: WheelEvent) => {
  //   event.preventDefault();


  //    if (event.deltaY > 0) {
  //      this.pageService.goToPage(this.pageService.currentPage + 1);
  //   } else {
  //     this.pageService.goToPage(this.pageService.currentPage - 1);
  //   }

  // };


} 
    
