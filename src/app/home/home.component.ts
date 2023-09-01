import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

constructor( private shared:SharedService){

}
  counter:number=0;
  addToCart(){
console.log("counter value" , this.counter)
this.counter++
  }
}
