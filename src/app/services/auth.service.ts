import { Injectable } from '@angular/core';
import { Route, Routes, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private TOKEN_SECRET_VALUE = 'myjwts3cr3t';

  constructor(private router: Router) { }

  validaToken(): string {
    let tkn = localStorage.getItem('tkn');
    if (!tkn){
      this.router.navigate(['/login']);
      return undefined;
    }else {
      if (helper.isTokenExpired(tkn)){
        this.router.navigate(['/login']);
        localStorage.removeItem('tkn');
        return undefined;
      }else
        return tkn;
    }
  }
}
