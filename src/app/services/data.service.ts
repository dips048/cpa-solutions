import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NavListModel } from '../models/nav-list.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  public getNavListOne(): Observable<Array<any>> {
    return this.http.get<any[]>('assets/nav-list1.json');
  }

  public getNavListTwo(): Observable<Array<NavListModel>> {
    return this.http.get<NavListModel[]>('assets/nav-list2.json');
  }
}
