import { Component, OnInit, ViewChild } from '@angular/core';
import { ItemService } from 'src/app/api/item.service';
import { ModalDialogComponent } from 'src/app/widgets/modal-dialog/modal-dialog.component';

@Component({
  templateUrl: './shop-item.component.html'
})
export class ShopItemComponent implements OnInit {

  shopList:any[] = []

  targetData : any

  @ViewChild(ModalDialogComponent)
  private dialog?:ModalDialogComponent

  constructor(private service:ItemService) {}

  ngOnInit(): void {
    this.initFormData()
    this.shopItem()
  }

  addNewItem() {
    this.initFormData()
    this.dialog?.show()
  }

  save(form:any) {
    this.service.save(form).subscribe(_ => {
      this.initFormData()
      this.shopItem()
      this.dialog?.hide()
    })
  }

  private shopItem() {
    this.service.shopItem().subscribe(result => this.shopList = result)
  }

  private initFormData() {
    this.targetData = {
      id: 0,
      name: '',
      price: ''
    }
  }
  
  addSellItem(id: number){
    this.service.addSellItem(id).subscribe(
      (result) => {
        console.log(result);
      }, 
      (error) => {
        console.log(error);
      }
  
    );
  }

}
