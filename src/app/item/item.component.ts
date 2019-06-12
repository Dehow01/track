import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import {INode} from '../models';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  private name: string;
  private subscription: Subscription;
  constructor( private itemService: ItemService, private activateRoute: ActivatedRoute) {
    this.subscription = activateRoute.params.subscribe(params => this.name = params.name);
  }
  nodeItem: INode[];
  ngOnInit() {
    if (this.name) {
      this.itemService.getItem(this.name).subscribe((res) => this.nodeItem = res);
    }
  }
  onSubmit() {
    this.itemService.getItem(this.name).subscribe((res) => this.nodeItem = res);
  }
}
