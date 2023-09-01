import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpServiceService } from '../services/http-service.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  productForm!: FormGroup;
  productId: string | null = null;

  constructor(private fb: FormBuilder, private http: HttpServiceService, private activateroute: ActivatedRoute, private router: Router) { }


  ngOnInit() {
    this.productId = this.activateroute.snapshot.paramMap.get('id');
    this.createForm();
    this.getProduct();
  }
  createForm() {
    this.productForm = this.fb.group(({

      'name': [''],
      'category': [''],
      'price': [''],
      'stock': [''],
      'id': ['']
    }))
  }
  save() {
    const endPoint = 'products/' + this.productId;
    this.http.putDataToServer(endPoint, this.productForm.value).subscribe((response: any) => { })
    this.router.navigate(['/product/product-list'])
  }
  getProduct() {
    const endPoint = 'products/' + this.productId;
    this.http.getDataToServer(endPoint).subscribe((response: any) => {
      this.productForm.setValue(response)
    })

  }
}
