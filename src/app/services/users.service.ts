import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUser } from '../interfaces/user';
import { IUserLogin } from './user-login';
import { BaseHttp } from './base-http';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseHttp {

  private token;

  private urlUserLogin = '/api/users/login';
  private urlUserCreate = '/api/users'; // post
  private urlUserRead = '/api/users'; // get
  private urlUserReadMe = '/api/users/me'; // get
  private urlUsers = '/api/users'; // get


  
  constructor(private httpClient: HttpClient, auth: AuthService) {
    super(auth);
   }

   userCreate(user: IUser){

   }

   userLogin(user:IUserLogin){

   }
   getMe():Observable<any>{
    return this.httpClient.get(this.urlUserReadMe,this.getHeader());
  }
  getUserReadById(id):Observable<any>{
    return this.httpClient.get(this.urlUserRead+"/"+id,this.getHeader());
  }

   getToken(userLogin:IUserLogin):Observable<any>{
     return this.httpClient.post(this.urlUserLogin,userLogin,this.getHeader());
   }
}
