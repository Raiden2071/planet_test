import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Planets } from 'src/app/models/planet';
import { AbstractCrudService } from 'src/app/shared/abstract/abstract.service';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService extends AbstractCrudService<Planets> {

  constructor(protected http: HttpClient) {
    super(http);
   }

   path = 'https://swapi.dev/api/planets';
}
