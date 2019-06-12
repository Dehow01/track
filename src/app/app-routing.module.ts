import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ItemComponent} from './item/item.component';
import {SupplyChainComponent} from './supply-chain/supply-chain.component';

const routes: Routes = [
  { path: '', redirectTo: '/item', pathMatch: 'full'},
  {path: 'item', component: ItemComponent},
  {path: 'item/:name', component: ItemComponent},
  { path: 'supply', component: SupplyChainComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
