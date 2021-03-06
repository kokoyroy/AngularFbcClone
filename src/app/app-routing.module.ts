import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FbcloneGuard } from './guards/fbclone.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule), canActivate: [FbcloneGuard] }
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
