import { Component, OnInit } from '@angular/core';
import { PagesService } from '../pages.service';
import { DotsComponent } from '../dots/dots.component';
import * as AOS from 'aos';
import { NavbarComponent1 } from '../navbar/navbar.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [DotsComponent, NavbarComponent1],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent  implements OnInit{
  constructor(public pageService: PagesService){

  }

  ngOnInit(): void {
      AOS.init({
        duration: 800,
        once: true
      });
    }
}


