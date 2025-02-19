import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Pedro';
  public gender: 'male' | 'female' = 'male';

  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  };


  changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  // i18nPlural
  public clients: string[] = ['Pedro', 'Juan', 'Luis', 'Ana', 'Melissa'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  deleteClient(): void {
    this.clients.shift();
  }

  //Keyvalue Pipe
  public person = {
    name: 'Pedro',
    age: 35,
    address: 'Calle 123, Ciudad'
  }


  //Async Pipe
  public myObservableTimer = interval(2000).pipe(
    tap(value => console.log('Timer', value))
  ) // cada 2 segundos

  // Una promesa a diferencia de asinc no se puede cancelar
  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
      console.log('Promesa terminada');
    }, 3500);
  });
}
