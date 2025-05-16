import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Hero, Publisher } from '../../interfaces/hero.interfaces';
import { HeroesService } from '../../services/heroes.service';
import { ThumbPosition } from '@angular/material/slider/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-new-page',
  standalone: false,
  templateUrl: './new-page.component.html',
  styleUrl: './new-page.component.css'
})
export class NewPageComponent implements OnInit {

  public heroForm = new FormGroup({
    id: new FormControl<string>(''),
    superhero: new FormControl<string>('',{nonNullable: true}),
    publisher: new FormControl<Publisher>(Publisher.DCComics),
    alter_ego: new FormControl<string>(''),
    first_appearance: new FormControl(''),
    characters: new FormControl(''),
    alt_img: new FormControl('')
  });


  public publishers = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ];


  constructor(
    private heroesService:HeroesService,
    private activatedRoute:ActivatedRoute,
    private router:Router
  ) {}

  get currentHero(): Hero {
    const hero = this.heroForm.value as Hero;
    return hero
  }


  ngOnInit(): void {
    if (!this.router.url.includes('edit')) return;

    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.heroesService.getHeroById(id)), //SwitchMap se asegura de cancelar peticiones anteriores si llegan nuevos params
    ).subscribe(hero => {
      if (!hero) return this.router.navigateByUrl('/');
      this.heroForm.reset(hero);
      return;
    }
    );

  }

  onSubmit():void {
    if (this.heroForm.invalid) return;

    // Si tiene id es un update
    if(this.currentHero.id){
      this.heroesService.updateHero(this.currentHero).subscribe(hero => {
        console.log(hero);
      })
      return;
    }

    // Si no tiene id es un create
    this.heroesService.addHero(this.currentHero)
      .subscribe(hero => {
        console.log(hero);
      })
  }

}