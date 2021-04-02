import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  titleSingular : string = 'Rol';
  titlePlural : string = 'Roles';

  constructor() { }

  ngOnInit(): void {
  }

}
