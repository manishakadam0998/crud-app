import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpServiceService } from '../services/http-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {

  productForm!: FormGroup;
productId:string | null=null;
isEdit:boolean=false;
  constructor(private fb: FormBuilder, private http: HttpServiceService, private activatedRoute: ActivatedRoute , private router:Router) {
   
   }
  ngOnInit(){
    this.createForm();
  
  }
 

    
 createForm(){
this.productForm=this.fb.group(({
 
'name':[''],
'category':[''],
'price':[''],
'stock':[''],
'id':['']
}))
    }

   
    
      save() {
        console.log(this.productForm.value);
        this.http.PostDataToServer('products', this.productForm.value).subscribe(
          (response: any) => {
            console.log('response', response);
            this.router.navigate(['/product'])
          },
          (error) => {
            console.log(error);
          })
      }
     
    }
    
      
    
  
  

