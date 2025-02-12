import { Component } from '@angular/core';

@Component({
  selector: 'shared-loading-spinner',
  templateUrl: './loadingSpinner.component.html',
  styles: `
    :host {
      display: block;
    }
    .spinner-container{
      align-items: center;
      background-color: rgba(0, 0, 0, 0.5);
      border-radius: 20px;
      bottom: 15px;
      color: white;
      display: flex;
      padding: 5px 10px;
      position: fixed;
      right: 15px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }
    span{
      margin-left: 10px;
    }
  `,
  standalone: false,
})
export class LoadingSpinnerComponent { }
