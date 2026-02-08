import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-navbar1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent1 {
    constructor(public pageService: PagesService) {}
menuOpen = false;
    toggleLanguage(){
      if(this.pageService.currentLanguage == "en"){
        this.pageService.currentLanguage = "de"
      } else{
        this.pageService.currentLanguage = "en"
      }
    }

    toggleMenu(){
      this.menuOpen = !this.menuOpen;
    }

}
