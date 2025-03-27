import { Component } from '@angular/core';
import { DrawerItem, DrawerSelectEvent } from '@progress/kendo-angular-layout';
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

  public items: Array<DrawerItem> = [
    { text: 'Inbox', selected: true },
    { separator: true },
    { text: 'Notifications' },
    { text: 'Calendar' },
    { separator: true },
    { text: 'Attachments' },
    { text: 'Favourites' },
  ];

  public onSelect(ev: DrawerSelectEvent): void {
    ev.preventDefault();
    this.selected = ev.item.text;
  }
}
