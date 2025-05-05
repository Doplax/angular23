import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Hero } from '../../interfaces/hero.interfaces';

@Component({
  selector: 'app-hero-page',
  standalone: false,
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css'
})
export class HeroPageComponent implements OnInit{

  public hero?: Hero;
  constructor(
    private HeroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.HeroesService.getHeroById(id)) // Cambia el id por el id que viene de la ruta

    ).subscribe(hero => {
      if (!hero) return this.router.navigate(['/heroes/list']); // Si no hay héroe, redirige a la lista de héroes
      this.hero = hero; // Asigna el héroe a la variable hero
      console.log({hero})
      return; // Devuelve el héroe
    });
  }

}
