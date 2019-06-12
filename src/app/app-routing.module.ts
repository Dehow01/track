import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ItemComponent} from './item/item.component';
import {SupplyChainComponent} from './supply-chain/supply-chain.component';

const routes: Routes = [
  { path: '', redirectTo: '/item', pathMatch: 'full'},
  {path: 'item', component: ItemComponent , pathMatch: 'full'},
  {path: 'item/:name', component: ItemComponent},
  { path: 'supply', component: SupplyChainComponent, pathMatch: 'full'},
  {path: 'supply/:name', component: SupplyChainComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
