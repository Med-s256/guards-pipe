import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './components/body/forget-password/forget-password.component';
import { LoginComponent } from './components/body/login/login.component';
import { NotFoundComponent } from './components/body/not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [

  {path: 'login' , component: LoginComponent},
  {path: 'forget-password', component: ForgetPasswordComponent},
  {path: 'adminT',
  canActivate: [AuthGuard],
  loadChildren:()=>
  import ('./components/body/admin/admin.module').then((m)=> m.AdminModule),
},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
