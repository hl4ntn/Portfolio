import { AfterViewInit, Component } from '@angular/core';
import { DotsComponent } from '../dots/dots.component';
import { NavbarComponent1 } from '../navbar/navbar.component';
import { PagesService } from '../pages.service';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-call-to-action',
  standalone: true,
  imports: [NavbarComponent1, DotsComponent, FormsModule],
  templateUrl: './call-to-action.component.html',
  styleUrl: './call-to-action.component.scss'
})
export class CallToActionComponent implements AfterViewInit {
isActive = false;
inputName = "Your name goes here";
inputEmail = "youremail@email.com";
inputMessage = "Hello Hannah, I am interested in...";
currentData = {
  name: '',
  email: '',
  message: '',
};

  constructor(public pageService: PagesService) {  
      }


 ngAfterViewInit() {
    const el = document.getElementById('5');
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.pageService.currentPage = 5;
          console.log('Page 5 ist sichtbar');
          history.replaceState(null, "", `#${'contact'}`);
        }
      },
      { threshold: 0.6 }
    );
    observer.observe(el);
  }

  toggle() {
    this.isActive = !this.isActive;
  }

  sendInputData(){
    
    if (this.inputName != "Your name goes here"){
      console.log(this.inputName);
    } else{
      this.showAlert('inputName');
    }
    if (this.inputEmail != "youremail@email.com") {
      console.log(this.inputEmail);
    } else{
      this.showAlert('inputEmail');
    }
    if(this.inputMessage != "Hello Hannah, I am interested in..."){
      console.log(this.inputMessage);
    } else{
      this.showAlert('inputMessage');
    }
    
  }

  emptyInput(input:any){
     (this as any)[input] = '';
    
  }

  showAlert(input: any){
    (this as any)[input] = "Oops! it seems your name is missing";
  }
  
}


