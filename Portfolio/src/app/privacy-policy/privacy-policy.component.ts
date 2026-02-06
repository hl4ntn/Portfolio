import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PagesService } from '../pages.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

  constructor(public pageService: PagesService){
  
    }
  toggleLanguage(){
      if(this.pageService.currentLanguage == "en"){
        this.pageService.currentLanguage = "de"
      } else{
        this.pageService.currentLanguage = "en"
      }
    }

    goBack() {
      if(this.pageService.currentPage == 5){
        window.history.back();
      } else{
        window.history.go(-2);  
      }

  console.log(this.pageService.currentPage);
}
switchCurrentPage(){
  this.pageService.currentPage = 0;
}
}
