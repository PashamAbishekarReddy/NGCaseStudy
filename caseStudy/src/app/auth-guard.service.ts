import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router: Router) { }

  setToken(token: string): void {
    localStorage.setItem('token',token);
  }

  getToken():string|null{
    return localStorage.getItem('token');
  }

  isLoggedIn(){
    return this.getToken()!==null;
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  login({firstName, password}: any): Observable<any>{
    if(firstName==='Kyrie' && password==='1234'){
      this.setToken('abcdefg12345678!@#$%^');
      return of({firstName:'Kyrie'});
    }
    return throwError(new Error('Failed to login'));
  }
}
