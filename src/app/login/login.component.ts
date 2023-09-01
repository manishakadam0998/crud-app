import { Component } from '@angular/core';
import{ FormGroup , FormBuilder} from '@angular/forms'
import { HttpServiceService } from '../services/http-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
loginForm!:FormGroup
isNewUser:boolean = false;
constructor( private fb:FormBuilder ,private http:HttpServiceService ,private router:Router){ }
ngOnInit(){
this.createForm();
}
createForm(){
  this.loginForm=this.fb.group({
    'email':[''],
    'password':['']
  })
    
  }
  login(){
    console.log("login initiated")
    const endPoint='users?email= '+this.loginForm.value.email+'&&password='+this.loginForm.value.password;
    this.http.getDataToServer(endPoint).subscribe((el:any)=>{
      console.log("login sucess")
      if (el && el.length > 0) {
      this.isNewUser=false;
      this.router.navigate(["/product"])

    } else {
      this.isNewUser = true;

}


})}
  }