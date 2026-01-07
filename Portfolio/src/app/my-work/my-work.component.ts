import { AfterViewInit, Component } from '@angular/core';
import { DotsComponent } from '../dots/dots.component';
import { NavbarComponent1 } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [NavbarComponent1, DotsComponent, CommonModule],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.scss'
})
export class MyWorkComponent  implements AfterViewInit {
  currentProject = 0;

   constructor(public pageService: PagesService) {  
    }

  projects = [
    {
      title: 'Join',
      screenshot: '../../assets/imgs/projects/join.png',
      bgcolor: '#F9AF42',
      suncolor: '',
      skills: 'HTML|CSS|Firebase|Angular|TypeScript',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      participation: 'A short capsule describing how you participated in the development of this project.',
      github: 'https://www.w3schools.com/html/html_css.asp',
      link: 'https://www.w3schools.com/html/html_css.asp',
      icon: '../../assets/imgs/icons/green_checkmark.png',
    },
    {
      title: 'DABubble',
      screenshot: '../../assets/imgs/projects/DABubble.jpg',
      bgcolor: '#679AAC',
      suncolor: '',
      skills: 'JavaScript|HTML|CSS',
      description: 'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
      participation: 'A short capsule describing how you participated in the development of this project.A short capsule describing how you participated in the development of this project.',
      github: '',
      link: '',
      icon: '../../assets/imgs/icons/bubble.png',    },
    {
      title: 'El Pollo Loco',
      screenshot: '../../assets/imgs/projects/elPolloLoco.jpg',
      bgcolor: '#FF834F',
      suncolor: 'yellow_sun',
      skills: 'JavaScript|HTML|CSS',
      description: 'A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale. ',
      participation: ' you participated in the development o',
      github: '',
      link: '',
      icon: '../../assets/imgs/icons/pollo.png',
    },
  ]

  

  ngAfterViewInit() {
    const el = document.getElementById('3');
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.pageService.currentPage = 3;
          console.log('Page 3 ist sichtbar');
          history.replaceState(null, "", `#${'mywork'}`);
        }
      },
      { threshold: 0.6 }
    );
    observer.observe(el);
  }

  previousProject(){
    if (this.currentProject > 0) {
      this.currentProject--;
    } else {
      this.currentProject = this.projects.length - 1;
    }
  }

  nextProject(){
    if (this.currentProject < this.projects.length - 1) {
      this.currentProject++;
    } else {
      this.currentProject = 0;
    }
  }

}
