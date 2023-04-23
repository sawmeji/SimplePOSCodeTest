import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellItemComponent } from './pages/sell-item/sell-item.component';
import { ShopItemComponent } from './pages/shop-item/shop-item.component';

const routes: Routes = [
  {path: 'shopItem', component: ShopItemComponent},
  {path: 'sellItem', component: SellItemComponent},
  {path: '', redirectTo: 'shopItem', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
