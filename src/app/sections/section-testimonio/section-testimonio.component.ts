import { Component } from '@angular/core';

@Component({
  selector: 'app-section-testimonio',
  templateUrl: './section-testimonio.component.html',
  styleUrls: ['./section-testimonio.component.css']
})
export class SectionTestimonioComponent {

  
  text: string[] = [
    'Muy contentos. Te explican todo claramente, te aconsejan, dan facilidades, la instalación estupenda. Excelente equipo de profesionales',
    'Mi experiencia ha sido muy satisfactoria tanto la atención como descripción del artículo y el envío. Volveré a comprar en cuanto lo necesite, de verdad que muy muy bien.Muchas gracias',
    'Recomiendo a e esta compañía, en cuanto al proceso de instalación super profesionales, puntuales y muy rigurosos en la instalación, bien es cierto que llevo poco tiempo con el producto instalado pero de momento todo perfecto. Las prestaciones que me está dando inmejorables.'
  ];

  autorText: string[] = [
    '-Fulanito',
    '-Menganito',
    '-Alguien'
  ];
}
