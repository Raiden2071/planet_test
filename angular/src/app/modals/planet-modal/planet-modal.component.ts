import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-planet-modal',
  templateUrl: './planet-modal.component.html',
  styleUrls: ['./planet-modal.component.scss']
})
export class PlanetModalComponent implements OnInit {

  peoples: any = [];
  @Input() planet: any;
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getPeople();
    console.log(this.planet);
  }

  getPeople(): void {
    from(this.planet.residents as any).subscribe(
      resident => this.http.get(resident as any).subscribe(resident => {
        this.peoples.push(resident);
      }));
  }

  click() {
    console.log(this.peoples);
    
  }
}
