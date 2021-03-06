import { Component, ViewEncapsulation } from '@angular/core';
import { MatDrawer } from '@angular/material';

@Component({
  selector: 'course-root#test',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent {
  public title = 'ng230120';
  public drawer !: MatDrawer;

  public setSidenav(drawer: MatDrawer) {
    this.drawer = drawer;
    // Promise.resolve().then(() =>);
  }
}
