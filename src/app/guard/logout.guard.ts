import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LocalService } from '../services/local.service';

@Injectable({
  providedIn: 'root',
})
export class LogoutGuard implements CanActivate {
  constructor(private localSevice:LocalService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    //let token = sessionStorage.getItem('tokenConcessionnaire');
    let token = sessionStorage.getItem('token');
    //let token2 = sessionStorage.getItem('tokenLocataire');

    //console.log(token);

    if (this.localSevice.concessionnaireConnecte()==true|| this.localSevice.locataireConnecte()==true) return false;
    else{
      this.localSevice.clearData();
      return true;
    } 
  }
}
