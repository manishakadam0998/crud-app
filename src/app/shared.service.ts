import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  subject$=new Subject()
  constructor() { 
  }
counter:number=0;
  addToCart(){
    console.log("counter value" , this.counter)
    this.counter++
  }
sendData( count:number){
this.subject$.next(count)
}

}
