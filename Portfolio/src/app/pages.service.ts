import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PagesService {
 pages = [ 
    { label: 'Landing', route: '/' },
    { label: 'About', route: '/about' },
    { label: 'Competencies', route: '/Competencies' },
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
      console.log(this.currentPage);
      this.router.navigate([page.route]);
    }
  }
}
