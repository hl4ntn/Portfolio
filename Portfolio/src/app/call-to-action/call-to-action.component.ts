import { AfterViewInit, ViewChild, Component } from '@angular/core';
import { DotsComponent } from '../dots/dots.component';
import { NavbarComponent1 } from '../navbar/navbar.component';
import { PagesService } from '../pages.service';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-call-to-action',
  standalone: true,
  imports: [NavbarComponent1, DotsComponent, FormsModule, RouterLink],
  templateUrl: './call-to-action.component.html',
  styleUrl: './call-to-action.component.scss'
})
export class CallToActionComponent implements AfterViewInit {
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
    if (this.isActive){
      this.privacyAlert = true;
    } else {
      this.privacyAlert = false;
    }
  }

  onSubmit(ngForm: NgForm) {
    if(ngForm.valid && ngForm.submitted){
      console.log(this.currentData, 'ich wurde ausgeführt');
      this.missingNameData = false;
      this.missingEmailData = false;
      this.missingMessageData = false;
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
 

  // standardInput(){
  //   return this.currentData.name == 'Oops! it seems your name is missing' || this.currentData.email == 'Hoppla! your email is required' || this.currentData.message == 'What do you need to develop?'
  // }

  // sendInputData(){

  //   this.saveNameInput();
  //   this.saveEmailInput();
  //   this.saveMessageInput();
    
  //   this.checkAllData();
    
    
    
   
    
  // }

  // saveNameInput(){
  //   if (this.inputName != "Your name goes here" && this.inputName != ""){
  //       this.currentData.name = this.inputName;
  //   }
  // }

  // saveEmailInput(){
   
  //       this.currentData.email = this.inputEmail;
   
  // }

  // saveMessageInput(){
  //   if(this.inputMessage != "Hello Hannah, I am interested in..." && this.inputMessage != ""){
  //       this.currentData.message = this.inputMessage;
  //   }
  // }

  // checkAllData(){
  //   if (this.currentData.name == ''){
  //       this.showAlert('inputName', 'Oops! it seems your name is missing');
  //       this.missingNameData = true;
  //   } else if (this.currentData.email == '') {
  //       this.showAlert('inputEmail', 'Hoppla! your email is required');
  //       this.missingEmailData = true;
  //   } else if(this.currentData.message == '') {
  //       this.showAlert('inputMessage', 'What do you need to develop?');
  //       this.missingMessageData = true;
  //   } else {
  //     console.log(this.currentData);
  //     this.emptyInput('inputName');
  //     this.emptyInput('inputEmail');
  //     this.emptyInput('inputMessage');
      // this.emptyJson();
    }
  // }

  // emptyJson(){
  //   this.currentData = {
  //   name: '',
  //   email: '',
  //   message: '',
  //   };
  // }

  // emptyInput(input:any){
  //    (this as any)[input] = '';
  //    this.missingNameData = false;
  //    this.missingEmailData = false;
  //    this.missingMessageData = false;
    
  // }

  // showAlert(inputId: string, input: string){
  //   (this as any)[inputId] = input;
  // }
  
// }


