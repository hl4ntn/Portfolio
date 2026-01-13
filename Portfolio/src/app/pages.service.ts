import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PagesService {
 pages = [ 
    { label: 'landing', route: '/' },
    { label: 'about', route: '/about' },
    { label: 'competencies', route: '/competencies' },
    { label: 'work', route: '/work' },
    { label: 'references', route: '/references' },
    { label: 'contact', route: '/contact' },
  ];
 currentPage = 0;
 direction: 'up' | 'down' = 'down';

  constructor(private router: Router) { }

  // goToPage(index: number) {
  //   console.log(index)
  //   const page = this.pages[index];
  //   if (index < 0 || index > this.pages.length) return;
  //   if (page) {
  //      this.direction = index > this.currentPage ? 'down' : 'up';
  //     this.currentPage = index;
  //     console.log(this.currentPage, this.direction);
  //     this.router.navigate([page.route]);
  //   }
  // }

  // setSection(index: number){
  //   console.log(index);
  //   this.currentPage = index;
  // }

  goToPage(index: number){
    this.currentPage = index;
    console.log(this.currentPage)
  }
}
