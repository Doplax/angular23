import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Hero, Publisher } from '../../interfaces/hero.interfaces';
import { HeroesService } from '../../services/heroes.service';
import { ThumbPosition } from '@angular/material/slider/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, switchMap, tap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirmDialog/confirmDialog.component';
import { RouterTestingHarness } from '@angular/router/testing';

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
    private router:Router,
    private snackbar: MatSnackBar,
    private dialog: MatDialog
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
        this.showSnackBar(`Hero ${hero.superhero} updated`);
      })
      return;
    }

    // Si no tiene id es un create
    this.heroesService.addHero(this.currentHero)
      .subscribe(hero => {
        this.router.navigate(['/heroes/edit', hero.id]);
        this.showSnackBar(`Hero ${hero.superhero} created`);
      })
  }

  onDeleteHero(){
    if (!this.currentHero.id) throw Error('Hero id is required');

    const dialogRef = this.dialog.open(ConfirmDialogComponent , {
      data: this.heroForm.value
    });

    dialogRef.afterClosed()
    .pipe(
      filter( (result:boolean) => result === true), // Si el resultado es true, pasa al siguiente operador
      switchMap( () => this.heroesService.deleteHeroById(this.currentHero.id) ),
      filter( (wasDeleted:boolean) => wasDeleted === true), // Si fue eliminado, pasa al siguiente operador
    )
    .subscribe((result) => {
      this.router.navigate(['/heroes']);
    });
  }

  showSnackBar(message: string): void {
    this.snackbar.open(message, 'done', {
      duration: 2500,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }

}