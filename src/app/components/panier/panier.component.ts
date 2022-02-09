import { Component, OnInit, Output } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { BoxsComponent } from '../boxs/boxs.component';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  Boxes : any = [];
  
  public grandTotal !: number;
  constructor(private crudService : CrudService, private boxcomponent : BoxsComponent ) { }

  ngOnInit(): void {
    this.fetchBoxes();
    console.log("box ==" + Object.values(this.boxcomponent.box[0]));
    for (var i = 0; i < this.boxcomponent.box.length; i++) { 
      this.fetchBox(this.boxcomponent.box[i].id);
    }
     }
   


fetchBox(id : number) {

  
  return this.crudService.getBox(id.toString())
  .subscribe(res=>{
    this.boxcomponent.box = res;
  })
  }
fetchBoxes() {
  return this.crudService.getBoxes()
  .subscribe(res=>{
    this.Boxes = res;
    this.grandTotal = this.crudService.getTotalPrice();
  })
  }
  removeitem(boxe: any){
    this.crudService.removeCartItem(boxe);
    console.log(boxe);
  }
  emptycart(){
    this.crudService.removeAllCart();
  }

}
