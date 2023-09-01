import { Component } from '@angular/core';
import{FormBuilder,FormGroup} from '@angular/forms'
import { HttpServiceService } from '../services/http-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
signupform!:FormGroup
  constructor( private fb:FormBuilder ,private http:HttpServiceService ,private router:Router){}

  ngOnInit(){
    this.creatform();
  }
  creatform(){
    this.signupform=this.fb.group({
      'name':[''],
      'mobile':[],
      'Email':[''],
      'Password':['']
    })
  }
  signup(){
    console.log(this.signupform.value);
    this.http.PostDataToServer('users',this.signupform.value).subscribe(
      (response:any)=>{
        console.log(response);
 this.router.navigate(["/login"])
      },
      (error)=>{}
      )
    
  }
}


