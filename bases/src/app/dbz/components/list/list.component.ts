import { Component, Input, Output,EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [];


  @Output()
  public onDeleteId:EventEmitter<string> = new EventEmitter();
  //public onDeleteId = new EventEmitter<number>(); // Otra forma de hacerlo infiriendo el tipo

  constructor(
    public dbzService: DbzService,){
  }

  onDeleteCharacter({id}:Character ):void {
    console.log();
    this.onDeleteId.emit(id);

  }
}
