import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'fernando herrera';
  public nameUpper: string = 'FERNANDO HERRERA';
  public nameComplete: string = 'FeRnAnDo HeRrErA';
}
