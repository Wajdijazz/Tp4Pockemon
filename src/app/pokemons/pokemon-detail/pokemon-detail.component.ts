import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PockemonService } from '../pockemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  details: any;
  types: any;

  constructor(private activateRoute: ActivatedRoute,private pockemonService:PockemonService,private router: Router) { }

  ngOnInit() {
    this.activateRoute.params.subscribe( (c) => {
     this.pockemonService.getPokemonDetails(c.pokemonId).subscribe((data)=>{
      this.details=data
      console.log( this.details)
this.types=this.details.types


     })
       
  });
  }
  goBack(){

    this.router.navigateByUrl(``);

    
  }

}
