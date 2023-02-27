import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode'

@Injectable({
  providedIn: 'root'
})
export class JWTTokenService {

jwtToken: string="";
decodedToken: { ['key:string']: string; } | undefined;

  constructor() { }

setToken(token:string){
  if(token){
    this.jwtToken=token;
  }
}
decodeToken() {
  if (this.jwtToken) {
  
  }
}

}
