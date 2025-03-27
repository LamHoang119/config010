import { Component } from '@angular/core';
import { SVGIcon } from '@progress/kendo-svg-icons';
import { menuIcon } from '@progress/kendo-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  public selected = 'Inbox';
  public menuSvg: SVGIcon = menuIcon;

}
