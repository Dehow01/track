import { Component, OnInit } from '@angular/core';
import {SupplyChainService} from '../supply-chain.service';
import {IStatics} from '../models';

@Component({
  selector: 'app-supply-chain',
  templateUrl: './supply-chain.component.html',
  styleUrls: ['./supply-chain.component.css']
})
export class SupplyChainComponent  {
  private name: string;
  nodeStatics: IStatics[];
  constructor(private supplyService: SupplyChainService) { }
  onSubmit() {
    this.supplyService.getStatic(this.name).subscribe((res) => this.nodeStatics = Array.from(res));
    console.log(this.nodeStatics);
  }

}
