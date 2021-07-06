import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Residents } from 'src/app/models/residents';
import { AbstractCrudService } from 'src/app/shared/abstract/abstract.service';

@Injectable({
  providedIn: 'root'
})
export class PeopleService extends AbstractCrudService<Residents> {

  constructor(protected http: HttpClient) {
    super(http);
   }
  //  https://swapi.dev/api/planets
   path = 'people'
}
