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
    { label: 'legal-notice', route: '/legal-notice' }
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
