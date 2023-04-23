import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopItemComponent } from './pages/shop-item/shop-item.component';
import { SellItemComponent } from './pages/sell-item/sell-item.component';
import { TopPageComponent } from './widgets/top-page/top-page.component';
import { ModalDialogComponent } from './widgets/modal-dialog/modal-dialog.component';
import { ItemFormComponent } from './widgets/item-form/item-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ShopItemSaveComponent } from './pages/shop-item/shop-item-save/shop-item-save.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopItemComponent,
    SellItemComponent,
    TopPageComponent,
    ModalDialogComponent,
    ItemFormComponent,
    ShopItemSaveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
