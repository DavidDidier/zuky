import { Component } from '@angular/core';

@Component({
  selector: 'app-section-kits',
  templateUrl: './section-kits.component.html',
  styleUrls: ['./section-kits.component.css']
})
export class SectionKitsComponent {

  numKit: string[] = [
    'Kit solar 850 W/día',
    'Kit solar 3200 W/día',
    'Kit solar 6400 W/día',
    'Kit solar 19800 W/día'
  ];

}
