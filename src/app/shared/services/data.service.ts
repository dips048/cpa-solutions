import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NavigationListModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  public getNavigationList(): Observable<Array<NavigationListModel>> {
    return this.http.get<any[]>('assets/navigation-list.json');
  }

}
