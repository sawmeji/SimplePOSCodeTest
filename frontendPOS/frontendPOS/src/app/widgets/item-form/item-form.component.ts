import { Component, Input } from '@angular/core';

@Component({
  selector: 'widget-item-form',
  templateUrl: './item-form.component.html'
})
export class ItemFormComponent {

  @Input()
  label?:string


}
