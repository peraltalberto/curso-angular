import { HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

export class BaseHttp {



    private httpOptionsBasic  =  {}

      constructor(private auth: AuthService){

      }

    getHeader(){
      let tkn =   this.auth.validaToken();
      console.log(tkn);
      if(tkn)
          this.httpOptionsBasic = { headers: new HttpHeaders( {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer '+tkn
          })};
          else
          this.httpOptionsBasic = { headers: new HttpHeaders( {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          })};
      console.log(this.httpOptionsBasic);
      return  this.httpOptionsBasic
    }
}
