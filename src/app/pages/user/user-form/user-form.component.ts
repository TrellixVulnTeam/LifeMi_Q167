import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user : User = new User();
  titleSingular: string = 'Usuario';
  titlePlural: string = 'Usuarios';
  iconText: string = 'ni-single-02';

  constructor(private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarCliente();
  }

  cargarCliente() : void {
    this.activatedRoute.params.subscribe( params => {
      const id = params['id'];
      if (id) {
        this.userService.getById(id).subscribe( response => this.user = response );
        console.log(this.user);
        
      }
    });
  }

  create() : void {
    this.userService.create(this.user).subscribe( response => {
      if (response.status == 200) {
        swal('Registro Guardado', `Usuario creado con exito`, 'success');
      } else {
        swal('Error', response.message, 'error');
      }
      this.router.navigate(['/user'])
    });
  }

  update() : void {
    this.userService.update(this.user).subscribe( response => {
      if (response.status == 200) {
        swal('Registro Actualizado', `Usuario actualizado con exito`, 'success');
      } else {
        swal('Error', response.message, 'error');
      }
      this.router.navigate(['/user'])
    });
  }
  
}
