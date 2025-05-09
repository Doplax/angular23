import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Hero } from '../../interfaces/hero.interfaces';
import { HeroesService } from '../../services/heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search-page',
  standalone: false,
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css'
})
export class SearchPageComponent {

  public searchInput = new FormControl('');
  public heroes: Hero[] = [];

  constructor(private heroesService: HeroesService) {}

  searchHero() {
    const value = this.searchInput.value?.trim().toLowerCase();

    if (!value) {
      this.heroes = [];
      return;
    }

    console.log('Buscando:', value); // <-- DEBUG
    this.heroesService.getSuggestions(value).subscribe(heroes => {
      console.log('Respuesta desde json-server:', heroes); // <-- DEBUG real
      this.heroes = heroes;
    });
  }


  onSelectedOption( event: MatAutocompleteSelectedEvent): void{
    const hero: Hero = event.option.value;
    this.searchInput.setValue(hero.superhero);
    console.log('Hero seleccionado:', hero); // <-- DEBUG
    this.heroesService.getHeroById(hero.id).subscribe(hero => {
      console.log('Respuesta desde json-server:', hero); // <-- DEBUG real
    });
  }

}
