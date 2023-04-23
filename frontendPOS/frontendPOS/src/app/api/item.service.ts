import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API = `http://localhost:8080`

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http:HttpClient) { }

  shopItem(){
    return this.http.get<any[]>(`${API}/shopItem`)
  }

  save(form:any){
    const {id, ... others} = form
    return (id > 0) ? this.http.put<any>(`${API}/shopItem/${id}`, others) : this.http.post<any>(`${API}/shopItem`, others)
  }

  sellItem(){
    return this.http.get<any[]>(`${API}/sellItem`)
  }

  addSellItem(id:number){
    return this.http.get(`${API}/sellItem/add/${id}`)
  }

  totalSellPrice(){
    return this.http.get<any>(`${API}/sellItem/totalSellPrice`)
  }

  sellItemByBestSeller(){
    return this.http.get<any[]>(`${API}/sellItem/sellItemByBestSeller`)
  }

}
