import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'


@Injectable({providedIn: 'root'})
export class DbzService {
  constructor() { }
  public characters:Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },{
    id: uuid(),
    name: 'Trunks',
    power: 8500
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  }
]

  onNewCharacter(character: Character):void {

    const newCharacter: Character = {id: uuid(),...character} // De esta forma esparcimos todas la propiedades de character

    this.characters.push(character);
  }

  deleteCharacterById(id: string):void {
    this.characters = this.characters.filter(character => character.id !== id)
  }
}
