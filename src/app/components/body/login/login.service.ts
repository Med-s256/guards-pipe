import { Injectable } from '@angular/core';
import { AdminModule } from 'angular-routing/src/app/components/body/admin/admin.module';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  t: boolean = false;

  constructor() { }

  login(user: string, passw: string): boolean{
    if(user.toString() == "admin" && passw.toString() == "12345678"){
console.log("succes");
this.t= true;
this.isloggin();
    }
    else{
    this.t = false;
    this.isloggin();
    }
    return this.t;
  }
  isloggin(): boolean{
    return this.t;
  }
}
