import { Component, OnInit } from '@angular/core';
import { FunctionO } from 'src/app/model/function'
import { FunctionService } from 'src/app/services/function.service';
import { LanguageApp } from 'src/app/variables/LenguageApp';
import swal from 'sweetalert2';

@Component({
  selector: 'app-function',
  templateUrl: './function.component.html',
  styleUrls: ['./function.component.css']
})
export class FunctionComponent implements OnInit {

  titleSingular : string = 'Función';
  titlePlural : string = 'Funciones';
  listModel : FunctionO[] = [];
  dtOptions: any;
  iconText: string = 'fa-tag';

  constructor(private functionService : FunctionService) { }

  ngOnInit(): void {
    this.get();
  }

  public get() : void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      language: LanguageApp.spanish_datatables,
      pageLength: 10,
    };

    this.functionService.get().subscribe( res => {
      this.listModel = res;
    });
    
  }

  public delete(functionO : FunctionO) : void {
    this.functionService.delete(functionO.idFunction).subscribe( response => {
      if (response.status == 200) {
        if (functionO.status > 0) {
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
