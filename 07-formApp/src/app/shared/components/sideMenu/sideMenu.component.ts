import { ChangeDetectionStrategy, Component } from '@angular/core';

interface MenuItem {
  title: string;
  route: string;
}

@Component({
  selector: 'shared-side-menu',
  templateUrl: './sideMenu.component.html',
  styleUrl: './sideMenu.component.css',
  standalone: false,
})
export class SideMenuComponent {
  public reactiveMenu: MenuItem[] = [
    {
      title: 'Basic',
      route: './reactive/basic'
    },
    {
      title: 'Dynamic',
      route: './reactive/dynamic'
    },
    {
      title: 'Switches',
      route: './reactive/switches'
    },
  ];


  public authMenu: MenuItem[] = [
    {
      title: 'Basic',
      route: './reactive/basic'
    },
    {
      title: 'Dynamic',
      route: './reactive/dynamic'
    },
    {
      title: 'Switches',
      route: './reactive/switches'
    },
  ];
}
