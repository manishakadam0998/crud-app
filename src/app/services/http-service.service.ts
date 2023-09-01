import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  baseUrl:string="http://localhost:3000/";
  httpHeaders:HttpHeaders=new HttpHeaders({
    'content-type':'application/json'
  })

  constructor( private http:HttpClient) { }
  PostDataToServer(endPoint:string,body:any){

    const url=this.baseUrl + endPoint;
    return this.http.post(url,body,{headers:this.httpHeaders})
  }
  getDataToServer(endPoint:string){
    const url =this.baseUrl + endPoint
    return this.http.get(url,{headers:this.httpHeaders})
  }
  putDataToServer(endPoint:string,body:any){
    const url =this.baseUrl + endPoint
    return this.http.put(url,body,{headers:this.httpHeaders})
 }
  deleteDataToServer(endPoint:string){
    const url =this.baseUrl + endPoint
    return this.http.delete(url,{headers:this.httpHeaders})
  }
}
