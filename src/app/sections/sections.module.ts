import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionInfoComponent } from './section-info/section-info.component';
import { SectionKitsComponent } from './section-kits/section-kits.component';
import { SectionCarContainerComponent } from './section-car-container/section-car-container.component';
import { SectionEspecialistasComponent } from './section-especialistas/section-especialistas.component';
import { SectionTestimonioComponent } from './section-testimonio/section-testimonio.component';
import { SectionPageComponent } from './section-page/section-page.component';



@NgModule({
  declarations: [
    SectionInfoComponent,
    SectionKitsComponent,
    SectionCarContainerComponent,
    SectionEspecialistasComponent,
    SectionTestimonioComponent,
    SectionPageComponent,
  ],
  exports:[
    SectionPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SectionsModule { }
