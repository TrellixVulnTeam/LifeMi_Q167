import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  titleSingular : string = 'Usuario';
  titlePlural : string = 'Usuarios';
  listUsers : User[];

  constructor(private userService : UserService,
              private modalService: NgbModal) { }

  ngOnInit(): void {
    this.get();
    // swal('Cliente Guardado', `Hola`, 'success');
  }

  public get() : void {
    this.userService.get().subscribe( res => this.listUsers = res );
  }
  
  public delete(user : User) : void {
    this.userService.delete(user.idUser).subscribe( response => {
      console.log("-- Response --");
      console.log(response);

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
