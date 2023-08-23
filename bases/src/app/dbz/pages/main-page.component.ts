import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent {

  public characters:Character[] = [{
    name: 'Krillin',
    power: 1000
  },{
    name: 'Trunks',
    power: 8500
  },{
    name: 'Goku',
    power: 9500
  }
]

  onNewCharacter(character: Character):void {
    console.log('main page');
    console.log(character);
    this.characters.push(character);
  }

  onDeleteCharacter(index: number):void {
    this.characters.splice(index,1)
  }
}
