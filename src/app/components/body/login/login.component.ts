import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  pass!: string;
  mail!: string;

  constructor(private loginserv: LoginService, private router: Router, private authself: AuthGuard ) { }

  ngOnInit(): void {
  }
  login(){
    if(this.loginserv.login(this.mail, this.pass))
    {
      alert('succeed');
      this.router.navigate(['/adminT'])
    }
    else
    this.router.navigate(['/admin'])
  }
}
