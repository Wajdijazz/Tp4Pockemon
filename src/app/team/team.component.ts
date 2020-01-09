import { Component, OnInit } from '@angular/core';
import { TeamService } from './team.service';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  constructor(private teamService: TeamService) { }

  ngOnInit() {

    this.teamService.getMyTeam().subscribe(data=>{

      console.log(data)
    })


  }

}
