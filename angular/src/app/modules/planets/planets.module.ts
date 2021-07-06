import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetsComponent } from './planets.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [PlanetsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class PlanetsModule { }
