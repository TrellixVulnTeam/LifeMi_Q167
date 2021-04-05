import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Role } from 'src/app/model/role';
import { RoleService } from 'src/app/services/role.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-role-form',
  templateUrl: './role-form.component.html',
  styleUrls: ['./role-form.component.css']
})
export class RoleFormComponent implements OnInit {

  role : Role = new Role();
  titleSingular: string = 'Rol';
  titlePlural: string = 'Roles';
  iconText: string = 'fa-tag';

  constructor(private roleService : RoleService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() : void {
    this.activatedRoute.params.subscribe( params => {
      const id = params['id'];
      if (id) {
        this.roleService.getById(id).subscribe( response => this.role = response );
      }
    });
  }

  create() : void {
    this.roleService.create(this.role).subscribe( response => {
      if (response.status == 200) {
        swal('Registro Guardado', `Rol creado con exito`, 'success');
      } else {
        swal('Error', response.message, 'error');
      }
      this.router.navigate(['/role'])
    });
  }

  update() : void {
    this.roleService.update(this.role).subscribe( response => {
      if (response.status == 200) {
        swal('Registro Actualizado', `Rol actualizado con exito`, 'success');
      } else {
        swal('Error', response.message, 'error');
      }
      this.router.navigate(['/role'])
    });
  }
}
