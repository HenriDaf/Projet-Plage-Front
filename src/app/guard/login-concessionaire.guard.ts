import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalService } from '../services/local.service';

@Injectable({
  providedIn: 'root'
})

export class LoginConcessionaireGuard implements CanActivate {
  constructor(private router:Router, private localService:LocalService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


  //  let token= sessionStorage.getItem('tokenConcessionnaire');
   let token= sessionStorage.getItem('token');
    console.log("guard C: "+token);
   /* if(token)
(this.localService.isTokenExpired(token));*/
    if(token && this.localService.isTokenExpired(token)===false && this.localService.isConcessionnaire(token)===true){
      return true;
    } else if(token && this.localService.isTokenExpired(token)===true && this.localService.isConcessionnaire(token)===true){
      
      this.localService.clearData();
      this.router.navigateByUrl("");
      alert("Session expirée, veuillez-vous reconnecter");
      return false;
    }
    else{
      this.router.navigateByUrl("");
   
      return false;
    } 
  }



}
