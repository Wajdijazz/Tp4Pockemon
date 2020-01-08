import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { Routes, RouterModule } from '@angular/router';
import { PockemonService } from './pockemon.service';
import {MatListModule} from '@angular/material/list';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component'; 
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonModule} from '@angular/material/button';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

const routes: Routes = [
  { path: '', component: PokemonListComponent ,        
},
{ path: 'pokemon-detail/:pokemonId', component: PokemonDetailComponent ,        
},
]

@NgModule({
  declarations: [PokemonListComponent, PokemonDetailComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatChipsModule,
    MatButtonModule,
    InfiniteScrollModule,
    RouterModule.forRoot(routes)
   
  ],

  providers: [PockemonService],
})
export class PokemonsModule { }
