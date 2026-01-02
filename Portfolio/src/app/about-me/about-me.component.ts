import { Component, AfterViewInit,  ElementRef, ViewChildren, QueryList, ViewChild } from '@angular/core';
import { DotsComponent } from '../dots/dots.component';
import { NavbarComponent1 } from '../navbar/navbar.component';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [NavbarComponent1, DotsComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})

export class AboutMeComponent  implements AfterViewInit {
  @ViewChild('page') page!: ElementRef;
   @ViewChildren('box') boxes!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    this.page.nativeElement.getBoundingClientRect();
    requestAnimationFrame(() => {
    this.page.nativeElement.classList.add('is-visible');
  });

    this.boxes.changes.subscribe(() => {
      this.animateBoxes();
    });

    // Falls sie direkt da sind
    this.animateBoxes();
  }

private animateBoxes(): void {
  if (!this.boxes || this.boxes.length === 0) return;

  this.boxes.forEach(box => {
    const el = box.nativeElement;
    el.getBoundingClientRect();


    // Reflow erzwingen (SEHR wichtig)
    el.getBoundingClientRect();

    requestAnimationFrame(() => {
      el.classList.add('is-visible');
    });
  });
}

}
