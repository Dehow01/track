import { Component, OnInit } from '@angular/core';
import {SupplyChainService} from '../supply-chain.service';
import {IStatics} from '../models';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-supply-chain',
  templateUrl: './supply-chain.component.html',
  styleUrls: ['./supply-chain.component.css']
})
export class SupplyChainComponent implements OnInit {
  private name: string;
  nodeStatics: IStatics[];
  private subscription: Subscription;
  constructor(private supplyService: SupplyChainService, private activateRoute: ActivatedRoute) {
    this.subscription = activateRoute.params.subscribe(params => this.name = params.name);
  }
  ngOnInit(): void {
    if (this.name) {
      this.supplyService.getStatic(this.name).subscribe((res) => this.nodeStatics = Array.from(res));
    }
  }

  onSubmit() {
    this.supplyService.getStatic(this.name).subscribe((res) => this.nodeStatics = Array.from(res));
    console.log(this.nodeStatics);
  }

}
