import { Component, OnInit } from '@angular/core';
import { PlanetsService } from '../service/planets/planets.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PlanetModalComponent } from 'src/app/modals/planet-modal/planet-modal.component';
import { Planets } from 'src/app/models/planet';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {

  planets: Planets[] | any;
  selected : string = '0';
  constructor(
    private service: PlanetsService,
    private modalService: NgbModal
    ) { }

  ngOnInit(): void {
    this.getPlanets();
  }

  getPlanets() {
    this.service.getList().subscribe(planet => this.planets = planet);
  }

  openModal(planet) {
    this.modalService.open(PlanetModalComponent, { centered: true}).componentInstance.planet = planet;
  }

}
