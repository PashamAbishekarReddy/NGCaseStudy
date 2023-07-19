import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuardService } from '../auth-guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authSrv: AuthGuardService, private router: Router) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    password: new FormControl(''),
  });

  onSubmit(){
    console.log(this.loginForm.value);
    if(this.loginForm.valid){
      this.authSrv.login(this.loginForm.value).subscribe(
        (result)=>{
          console.log("result:", result)
          this.router.navigate(['home']);
        },
        (err: Error)=>{
          alert(err.message);
        }
      );
    }
  }

}
