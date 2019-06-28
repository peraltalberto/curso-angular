import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main/main.component';
import { UsersService } from '../services/users.service';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule
  ],
  providers:[UsersService]
})
export class MainModule { }
