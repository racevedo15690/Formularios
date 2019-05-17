import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { pairs } from 'rxjs';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form) {
      border: 1px solid red;
    }
  `]
})
export class TemplateComponent {

  usuario: Object = {
    nombre: null,
    apellido: null,
    correo: null,
    pais: '',
    sexo: '',
    acepta: false
  };

  paises = [{
      codigo: 'CRI',
      nombre: 'Costa Rica'
    },
    {
      codigo: 'GT',
      nombre: 'Guatemala'
    },
    {
      codigo: 'ESP',
      nombre: 'España'
    }
  ];

  sexos: string[] = ['Hombre', 'Mujer', 'Indefinido'];

  constructor() { }


  guardar( forma: NgForm ) {
    console.log( 'NgForm', forma );
    console.log( 'Valor Forma', forma.value );
    console.log('Usuario', this.usuario);
  }

}
