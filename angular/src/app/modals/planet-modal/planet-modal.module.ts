import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetModalComponent } from './planet-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [PlanetModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PlanetModalModule { }
