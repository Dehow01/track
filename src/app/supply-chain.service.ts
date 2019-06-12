import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
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
    // return this.http.get<INode[]>('assets/node.json');
    return this.http.get<IStatics[]>('assets/stat.json').pipe(map(data => {
      const nodeList = data['statList'];
      return nodeList.map((node: any) => {
        console.log(node);
        return {from: node.from, to: node.to, date: node.date , extraordinaryEvents: node.extraordinaryEvents, title: node.title};
      });
    }));
  }
}
