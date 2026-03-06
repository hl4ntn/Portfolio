import { AfterViewInit, ViewChild, Component, inject } from '@angular/core';
import { DotsComponent } from '../dots/dots.component';
import { NavbarComponent1 } from '../navbar/navbar.component';
import { PagesService } from '../pages.service';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-call-to-action',
  standalone: true,
  imports: [NavbarComponent1, DotsComponent, FormsModule, RouterLink, CommonModule],
  templateUrl: './call-to-action.component.html',
  styleUrl: './call-to-action.component.scss'
})
export class CallToActionComponent implements AfterViewInit {

  http = inject(HttpClient);

  @ViewChild('emailCtrl') emailCtrl!: NgModel;
isActive = false;
missingNameData = false;
missingEmailData = false;
missingMessageData = false;
privacyAlert = true;
currentData = {
  name: '',
  email: '',
  message: '',
};

  post = {
    endPoint: 'https://hannah-anton.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
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
          history.replaceState(null, "", `#${'contact'}`);
        }
      },
      { threshold: 0.6 }
    );
    observer.observe(el);
  }

  toggle() {
    this.isActive = !this.isActive;
    if (this.isActive){
      this.privacyAlert = true;
    } else {
      this.privacyAlert = false;
    }
  }

  onSubmit(ngForm: NgForm) {
       if (ngForm.submitted && ngForm.form.valid) {
        if(this.pageService.currentLanguage == "en"){
        alert("Your message has been sent");
        } else {
alert("Deine Nachricht wurde gesendet");
        }
      
      this.missingNameData = false;
      this.missingEmailData = false;
      this.missingMessageData = false;
      this.http.post(this.post.endPoint, this.post.body(this.currentData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });

        ngForm.resetForm();
      this.isActive = false;
    } else {
      this.showAlert();
      }
    }

  showAlert(){
    if (!this.currentData.name){
        this.currentData.name == ''
        this.missingNameData = true;
    }
     if (!this.currentData.email || this.emailCtrl.invalid) {
        this.currentData.email = '';
        this.missingEmailData = true;
    }
    if(!this.currentData.message) {
        this.currentData.message == ''
        this.missingMessageData = true;
  }}
 
}