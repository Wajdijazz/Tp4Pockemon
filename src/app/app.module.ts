import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import { PokemonsModule } from './pokemons/pokemons.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule
} from '@angular/material';
import { TeamComponent } from './team/team.component';
import { TokenInterceptor } from './login/token.interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
	LoginComponent,
	TeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule, 
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    FormsModule,
        ReactiveFormsModule,
    PokemonsModule,
    PokemonsModule
  ],
  providers: [
    { provide: TokenInterceptor, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
