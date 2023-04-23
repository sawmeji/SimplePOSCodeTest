import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-shop-item-save',
  templateUrl: './shop-item-save.component.html'
})
export class ShopItemSaveComponent {

  @Input()
  formData:any

  @Output()
  saveListener = new EventEmitter

  save() {
    this.saveListener.emit(this.formData)
  }

}
