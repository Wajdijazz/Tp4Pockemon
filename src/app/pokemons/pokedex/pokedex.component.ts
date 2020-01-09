import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  login(){
    this.router.navigateByUrl(`login`);


  }

}
