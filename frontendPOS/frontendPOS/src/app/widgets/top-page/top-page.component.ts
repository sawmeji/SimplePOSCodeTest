import { Component, Input } from '@angular/core';

@Component({
  selector: 'widget-top-page',
  templateUrl: './top-page.component.html'
})
export class TopPageComponent {

  @Input()
  title?:string

}
