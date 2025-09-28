import { HttpClient} from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class homeService{
   private baseUrl="https://localhost:7201/api/FoodMenu/";
   constructor(private _client:HttpClient){

   }
  currentuser:any;

    public getFoodList(){
    return this._client.get(this.baseUrl+'foodlist/list');
    }

}