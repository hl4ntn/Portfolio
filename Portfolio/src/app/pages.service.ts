import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PagesService {
 pages = [ 
    { label: 'Landing', route: '/' },
    { label: 'About', route: '/about' },
    { label: 'Work', route: '/work' },
    { label: 'References', route: '/references' },
    { label: 'Legal', route: '/legal-notice' }
  ];
 currentPage = 0;
  constructor(private router: Router) { }

  goToPage(index: number) {
    const page = this.pages[index];
    if (page) {
      this.currentPage = index;
      this.router.navigate([page.route]);
    }
  }
}
