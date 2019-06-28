import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {path: '**', redirectTo: 'main', pathMatch: 'full'},
  { path: 'main', loadChildren: './main/main.module#MainModule', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
