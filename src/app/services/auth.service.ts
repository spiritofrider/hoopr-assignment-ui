import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  googleAuth(){
    return this.httpClient.get('http://localhost:3000/auth/google');
  }

  signup(body:any){
    return this.httpClient.post('http://localhost:3000/auth/signup',body);
  }

  signin(body:any){
    return this.httpClient.post('http://localhost:3000/auth/signin',body);
  }
  
}

