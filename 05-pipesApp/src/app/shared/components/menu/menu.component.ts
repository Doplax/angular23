import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [''],
})
export class MenuComponent {
  menuItems: MenuItem[] = [];

  constructor(public router: Router) {}

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            routerLink: '/',
            //command: () =>  this.router.navigate(['/numbers'])
          },
          {
            label: 'Números',
            icon: 'pi pi-dollar',
            routerLink: '/numbers'
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
            routerLink: '/uncommon',
          },
        ],
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Custom Pipes',
            icon: 'pi pi-cog',
            routerLink: '/custom',
          },
        ],
      },
    ];
  }
}
