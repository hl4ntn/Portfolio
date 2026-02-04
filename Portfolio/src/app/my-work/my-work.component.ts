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
      participation: 'I actively contributed to the group project by collaborating with team members and supporting the implementation of key tasks. I also participated in discussions and helped ensure the project goals were met on time.',
      github: 'https://github.com/OliverPlit/Join-Gruppenarbeit',
      link: 'https://flynn-anton.developerakademie.net/Join_final/index.html',
      icon: '../../assets/imgs/icons/green_checkmark.png',
    },
    {
      title: 'DABubble',
      screenshot: '../../assets/imgs/projects/DABubble.jpg',
      bgcolor: '#679AAC',
      suncolor: '',
      skills: 'JavaScript|HTML|CSS',
      description: 'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
      participation: 'This needs to be filled out in the future',
      github: '',
      link: '',
      icon: '../../assets/imgs/icons/bubble.png',    },
    {
      title: 'El Pollo Loco',
      screenshot: '../../assets/imgs/projects/elPolloLoco.jpg',
      bgcolor: '#FF834F',
      suncolor: 'yellow_sun',
      skills: 'JavaScript|HTML|CSS',
      description: 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and bottles to fight against the killer chicken. ',
      participation: 'I independently developed and implemented the El Pollo Loco game from start to finish.',
      github: 'https://github.com/hl4ntn/elPolloLoco',
      link: 'https://flynn-anton.developerakademie.net/ElPolloLoco/index.html',
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
