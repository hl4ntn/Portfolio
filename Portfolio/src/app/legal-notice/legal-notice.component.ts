import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PagesService } from '../pages.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {
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
}

switchCurrentPage(){
  this.pageService.currentPage = 0;
}

}
