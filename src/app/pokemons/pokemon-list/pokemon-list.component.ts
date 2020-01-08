import { Component, OnInit } from '@angular/core';
import { PockemonService } from '../pockemon.service';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemons:any;
  


  constructor(private pockemonService:PockemonService) {  }

  ngOnInit() {
 this.pockemonService.getPokemons().subscribe(dataReceived => {
    let val;
  val=dataReceived;
   this.pokemons=val.data
    
  });
  

     
  }
  onScroll() {
    console.log('scrolled!!');
  }
  

  }


