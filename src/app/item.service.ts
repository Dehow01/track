import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {INode} from './models';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor( private http: HttpClient) { }
  getItem(name: string): Observable<INode[]> {
    const params = new HttpParams().set('name', name.toString());
    return this.http.get<INode[]>('http://localhost:8080/history/container', {params}).pipe(map(data => {
      const nodeList = data['nodelist'];
      return nodeList.map((node: any) => {
        return { name: (node.container_name) ? node.container_name : node.carrier_name , date: node.date, type: node.type, geolocation: node.geolocation, event: node.extraordinaryEvents};
      });
    }));
}
}
