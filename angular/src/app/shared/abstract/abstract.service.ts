import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractCrudService<T> {

  path = '';

  constructor(protected http: HttpClient) { }

  getList(params: string = ''.toLowerCase()): Observable<T[]> {
    return this.http.get<T[]>(this.path + params);
  }
  
  getOne(id: number, params: string = ''): Observable<T> {
    return this.http.get<T>(this.path + '/' + id + params);
  }
}
