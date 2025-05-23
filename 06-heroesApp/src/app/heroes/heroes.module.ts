import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HeroesRoutingModule } from './heroes-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { MaterialModule } from '../material/material.module';
import { CardComponent } from './components/card/card.component';
import { MatCardModule, } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { HeroImagePipe } from './pipes/heroImage.pipe';
import { ConfirmDialogComponent } from './components/confirmDialog/confirmDialog.component';

@NgModule({
  declarations: [
    LayoutPageComponent,
    NewPageComponent,
    SearchPageComponent,
    ListPageComponent,
    HeroPageComponent,
    CardComponent,
    ConfirmDialogComponent,

    // PIPES
    HeroImagePipe,
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule,
    MatCardModule,
    MatChipsModule,
    ReactiveFormsModule
  ],
  providers: [] // No necesitas provideHttpClient() aquí para módulos tradicionales
})
export class HeroesModule { }