import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PlanetsComponent } from './modules/planets/planets.component';
import { PlanetModalComponent } from './modals/planet-modal/planet-modal.component';
import { PlanetsModule } from './modules/planets/planets.module';
import { PlanetModalModule } from './modals/planet-modal/planet-modal.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    PlanetsModule,
    PlanetModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
