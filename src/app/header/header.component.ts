import {
  Component,
  Input,
} from '@angular/core';
import { MatDrawer } from '@angular/material';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'courses-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  @Input()
  public set myTitle(value: string) {
    if (!value) {
      return;
    }
    this.titleContent = this.domSanitizer.bypassSecurityTrustHtml(`<span style = 'color:red' >${value}</span>`);
  }

  public titleContent!: SafeHtml;
  @Input()
  public d!: MatDrawer;

  public constructor(
    private domSanitizer: DomSanitizer
  ) {
  }

  toggleSidenav(): void {
    this.d.toggle();
  }

}
