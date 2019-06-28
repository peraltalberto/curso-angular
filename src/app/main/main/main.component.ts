import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { HttpBackend } from '@angular/common/http';
import { IUserLogin } from 'src/app/services/user-login';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private http: UsersService,private auth: AuthService) { }
 
  public user: IUserLogin = {email:'',password:''};
  public userId: string;

  ngOnInit() {
  }
  login(){
    this.http.getToken(this.user)
    .subscribe(data => {
      console.log(data);
      localStorage.setItem('tkn',data.token);
      this.auth.validaToken()
    });
  }
  me(){
    this.http.getMe().subscribe(res=>console.log(res));
  }

  getInfoUser(){
    this.http.getUserReadById(this.userId).subscribe();
  }
}
