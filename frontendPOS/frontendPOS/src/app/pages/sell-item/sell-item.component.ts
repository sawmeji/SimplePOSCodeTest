import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/api/item.service';

@Component({
  templateUrl: './sell-item.component.html'
})
export class SellItemComponent implements OnInit{

  constructor(private service: ItemService){}

  sellList: any[] = []

  bestSeller: any[] = []

  totalPrice : any
  
  ngOnInit(): void {
    this.sellItem();
    this.sellItemByBestSeller();
    this.totalSellPrice();
  }

  sellItem(){
    this.service.sellItem().subscribe(
      result => this.sellList =result
    )
    this.service.sellItem().subscribe(
        result => this.sellList = result
    );
  }
  
  totalSellPrice(){
    this.service.totalSellPrice().subscribe(
      (result) => {
        console.log(result);
        this.totalPrice = result;
      }
    )
  }

  sellItemByBestSeller(){
    this.service.sellItemByBestSeller().subscribe(
      result => this.bestSeller = result
    )
  }

}
