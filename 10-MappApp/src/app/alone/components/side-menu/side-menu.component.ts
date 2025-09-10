import { Component, type OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

interface MenuItem {
  route: string;
  name: string;
}

@Component({
  selector: 'side-menu',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
})
export class SideMenuComponent {

  constructor() {}

  public menuItems: MenuItem[] = [
    { route: '/maps/fullscrteen', name: 'Full-Screen' },
    { route: '/maps/zoom-range', name: 'Zoom-Range' },
    { route: '/maps/markers', name: 'Markers' },
    { route: '/maps/properties', name: 'Houses' },
    { route: '/alone', name: 'Alone' },
  ]
}
