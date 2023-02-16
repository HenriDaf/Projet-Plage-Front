import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokeninterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   

let token=sessionStorage.getItem('id');
console.log("on entre dans l'intercepteur");
console.log(token);
if(token){
  let cloneRequest= request.clone({
    headers:new HttpHeaders().set('Authorization','bearer'+token)
  });
  return next.handle(cloneRequest);
}else{
  return next.handle(request);
}



  }

  
}
export const TokenInterceptorProvider={
  provide: HTTP_INTERCEPTORS,
  useClass: TokeninterceptorInterceptor,
  multi:true
}