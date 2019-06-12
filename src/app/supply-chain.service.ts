import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import { IStatics} from './models';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SupplyChainService {

  constructor(private http: HttpClient) {
  }

  getStatic(name: string): Observable<IStatics[]> {
    const params = new HttpParams().set('name', name.toString());
    return this.http.get<IStatics[]>('http://localhost:8080/history/carrier', {params}).pipe(map(data => {
      const nodeList = data['statList'];
      return nodeList.map((node: any) => {
        return {from: node.from, to: node.to, date: node.date , extraordinaryEvents: node.extraordinaryEvents, title: node.title};
      });
    }));
  }
}
