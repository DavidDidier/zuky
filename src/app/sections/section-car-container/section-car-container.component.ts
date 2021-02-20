import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-car-container',
  templateUrl: './section-car-container.component.html',
  styleUrls: ['./section-car-container.component.css']
})
export class SectionCarContainerComponent {

  texto : string[] = [
    'Materiales de primera calidad',
    'Presupuesto',
    'Garantía de Satisfacción'
  ];

  imagen: string[] = [
    "src\assets\img1.png",
    "src\assets\img2.png",
    "src\assets\img3.png"
  ];

  textoP: string[] = [
    'Utilizamos marcas punteras en el sector energético, como Victron o SMA para inversores, Trojan u Hoppecke para baterías y Lorentz para bombeos.',
    'Realizamos presupuesto y dimensionado de su instalación de energía solar sin compromiso, estaremos encantados de atenderle.',
    'Disponemos de garantía técnica para el cliente de 2 años, 25 años en nuestras placas o paneles solares y 5 años en los kits de placas solares con inversor Victron del que también somos servicio técnico oficial.'
  ];
}
