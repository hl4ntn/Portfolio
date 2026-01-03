import { Component, OnInit } from '@angular/core';
import { DotsComponent } from '../dots/dots.component';
import { NavbarComponent1 } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import * as AOS from 'aos';

@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [NavbarComponent1, DotsComponent, CommonModule],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.scss'
})
export class MyWorkComponent implements OnInit {
  currentProject = 0;

  projects = [
    {
      title: 'Join',
      screenshot: '../../assets/imgs/projects/join.png',
      bgcolor: '#F9AF42',
      skills: 'HTML|CSS|Firebase|Angular|TypeScript',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      participation: '',
      github: 'https://www.w3schools.com/html/html_css.asp',
      link: 'https://www.w3schools.com/html/html_css.asp',
      icon: '../../assets/imgs/icons/green_checkmark.png',
      iconsize: '40',
    },
    {
      title: 'DABubble',
      screenshot: '../../assets/imgs/projects/DABubble.jpg',
      bgcolor: '#679AAC',
      skills: 'JavaScript|HTML|CSS',
      description: 'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
      participation: '',
      github: '',
      link: '',
      icon: '../../assets/imgs/icons/bubble.png',
      iconsize: '40',
    },
    {
      title: 'El Pollo Loco',
      screenshot: '../../assets/imgs/projects/elPolloLoco.jpg',
      bgcolor: '#FF834F',
      skills: 'JavaScript|HTML|CSS',
      description: 'A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale. ',
      participation: '',
      github: '',
      link: '',
      icon: '../../assets/imgs/icons/bottle.png',
      iconsize: '60',
    },
  ]

   ngOnInit(): void {
        AOS.init({
          duration: 800,
          once: true
        });
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
