import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import { LanguageApp } from 'src/app/variables/LenguageApp';
import swal from 'sweetalert2';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  titleSingular : string = 'Usuario';
  titlePlural : string = 'Usuarios';
  listUsers : User[] = [];
  dtOptions: any;

  constructor(private userService : UserService,
              private modalService: NgbModal) { }

  ngOnInit(): void {
    this.get()
  }

  public get() : void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      language: LanguageApp.spanish_datatables,
      pageLength: 10,
    };

    this.userService.get().subscribe( res => {
      this.listUsers = res;
    });
  }
  
  public delete(user : User) : void {
    this.userService.delete(user.idUser).subscribe( response => {

      if (response.status == 200) {
        if (user.status > 0) {
          swal('Registro Deshabilitado', '', 'success');   
        } else {
          swal('Registro Habilitado', '', 'success');
        }
        this.get();
      } else {
        swal('Error', response.message, 'error');
      }
    });
  }
}
