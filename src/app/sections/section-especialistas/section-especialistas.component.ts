import { Component } from '@angular/core';

@Component({
  selector: 'app-section-especialistas',
  templateUrl: './section-especialistas.component.html',
  styleUrls: ['./section-especialistas.component.css']
})
export class SectionEspecialistasComponent  {

  tiposCheck : string[] = [
    'Energía solar para vivienda aislada',
    'Autoconsumo fotovoltaico',
    'Bombeos solares',
    'Grandes proyectos',
    'Ingeniería energética'
  ];

  formInput : string[] = ['Nombre' , 'Email' , 'Telefono'];
  type      : string[] = ['text' , 'email' , 'tel'];

}
