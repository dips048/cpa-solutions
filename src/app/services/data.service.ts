import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NavListOneModel, NavListTwoModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  public getNavListOne(): Observable<Array<NavListOneModel>> {
    return this.http.get<any[]>('assets/nav-list1.json');
  }

  public getNavListTwo(): Observable<Array<NavListTwoModel>> {
    return this.http.get<NavListTwoModel[]>('assets/nav-list2.json');
  }
}
