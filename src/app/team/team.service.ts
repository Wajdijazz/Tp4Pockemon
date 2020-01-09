import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../config';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) {

   }

   getMyTeam() {
    return this.http.get(`${config.apiUrl}/trainers/me/team`)
  }

}
