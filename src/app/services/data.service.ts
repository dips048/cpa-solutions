import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LinkModel } from '../models/linkl.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  public getNavigationData(): Observable<Array<LinkModel>> {
    return this.http.get<LinkModel[]>('assets/navigation.json');
  }
}
