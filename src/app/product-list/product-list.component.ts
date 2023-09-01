import { Component } from '@angular/core';
import { HttpServiceService } from '../services/http-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  productList:any=[];
  constructor( private http:HttpServiceService ,private router:Router){}
  ngOnInit(){
    this.getProducts();
  }
  
  getProducts(){
    console.log("product call initiated")
    this.http.getDataToServer('products').subscribe((response:any)=>{

      console.log("product sucess")
      if(response && response.length> 0){
        this.productList = response;
      }},
      (error)=>{
        alert(error)
      },

      )
    }

 deleteProduct(index:number, i:number){
    const endPoint="products/"+ index;
    console.log(endPoint)
    this.http.deleteDataToServer(endPoint).subscribe((el:any)=>{
      this.productList.splice(i,1);
      alert("data deleted sucessfully");
    },
    (error)=>{
      alert(error)
    }
    )
    }
    update(id:number){
      this.router.navigate(['/product/create-product'] )
      
    }
    
  }
  

