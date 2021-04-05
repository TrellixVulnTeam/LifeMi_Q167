import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FunctionO } from 'src/app/model/function';
import { FunctionService } from 'src/app/services/function.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-function-form',
  templateUrl: './function-form.component.html',
  styleUrls: ['./function-form.component.css']
})
export class FunctionFormComponent implements OnInit {

  functionO : FunctionO = new FunctionO();
  titleSingular: string = 'Rol';
  titlePlural: string = 'Roles';
  iconText: string = 'fa-tag';

  constructor(private functionService : FunctionService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() : void {
    this.activatedRoute.params.subscribe( params => {
      const id = params['id'];
      if (id) {
        this.functionService.getById(id).subscribe( response => this.functionO = response );
      }
    });
  }

  create() : void {
    this.functionService.create(this.functionO).subscribe( response => {
      if (response.status == 200) {
        swal('Registro Guardado', `Función creada con exito`, 'success');
      } else {
        swal('Error', response.message, 'error');
      }
      this.router.navigate(['/function'])
    });
  }

  update() : void {
    this.functionService.update(this.functionO).subscribe( response => {
      if (response.status == 200) {
        swal('Registro Actualizado', `Función actualizada con exito`, 'success');
      } else {
        swal('Error', response.message, 'error');
      }
      this.router.navigate(['/function'])
    });
  }

}
