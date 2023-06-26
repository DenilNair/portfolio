import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  shouldRun = true;
  public isExpanded = false;
  events: string[] = [];
  opened: boolean = true;
  laptop: boolean = true;
  constructor() {
    if (window.screen.width < 600) {
      console.log('mobile screen');
      this.laptop = false;
    } else {
      console.log('laptop screen');
      this.laptop = true;
    }
  }

  onResize(event: any) {
    console.log(event);
    console.log(window.screen.width);
    if (window.screen.width < 900) {
      console.log('mobile screen');
      this.laptop = false;
    } else {
      console.log('laptop screen');
      this.laptop = true;
    }
  }

  public toggleMenu() {
    this.isExpanded = !this.isExpanded;
  }
}
