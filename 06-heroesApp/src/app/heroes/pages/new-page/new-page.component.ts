import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Hero, Publisher } from '../../interfaces/hero.interfaces';
import { HeroesService } from '../../services/heroes.service';
import { ThumbPosition } from '@angular/material/slider/testing';

@Component({
  selector: 'app-new-page',
  standalone: false,
  templateUrl: './new-page.component.html',
  styleUrl: './new-page.component.css'
})
export class NewPageComponent {

  public heroForm = new FormGroup({
    id: new FormControl<string>(''),
    superhero: new FormControl<string>('',{nonNullable: true}),
    publisher: new FormControl<Publisher>(Publisher.DCComics),
    alter_ego: new FormControl<string>(''),
    first_appearance: new FormControl<'DC' | 'Marvel'>('DC'),
    characters: new FormControl(''),
    alt_img: new FormControl('')
  });


  public publishers = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ];


  constructor(private heroesService:HeroesService) {}

  get currentHero(): Hero {
    const hero = this.heroForm.value as Hero;
    return hero
  }

  onSubmit():void {
    if (this.heroForm.invalid) return;

    //this.heroesService.updateHero(this.heroForm.value)

  }

}