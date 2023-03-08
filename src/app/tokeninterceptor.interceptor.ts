import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { LocalService } from './services/local.service';

@Injectable()
export class TokeninterceptorInterceptor implements HttpInterceptor {

  constructor(private localService: LocalService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   

//let token=sessionStorage.getItem('id');
//let tokenL= sessionStorage.getItem('tokenLocataire');
//let tokenC= sessionStorage.getItem('tokenConcessionnaire');
//console.log("on entre dans l'intercepteur");

//console.log(token);
/*
if(tokenL){
  //console.log(sessionStorage.getItem('tokenLocataire'));
  let cloneRequest= request.clone({
    headers:new HttpHeaders().set('Authorization','bearer'+tokenL)
  });
  return next.handle(cloneRequest);
}else if(tokenC){
  //console.log(sessionStorage.getItem('tokenConcessionnaire'));
  let cloneRequest= request.clone({
    headers:new HttpHeaders().set('Authorization','bearer'+tokenC)
  });
  return next.handle(cloneRequest);

}else{
  return next.handle(request);
}*/
const token = this.localService.getToken();
console.log(token);

if(token !==null){
  let cloneRequest= request.clone({
    headers:new HttpHeaders().set('Authorization', 'bearer '+token)
  })
  console.log(request)
  console.log(cloneRequest);
  return next.handle(cloneRequest);
 /* return next.handle(cloneRequest).pipe(
    catchError(error=>{
      console.log(error)

      if(error.status===401){
        this.localService.clearData();
      }
      return throwError(() => new Error('session expired'))
    })
  );*/
}

return next.handle(request);
  }

  
}
export const TokenInterceptorProvider={
  provide: HTTP_INTERCEPTORS,
  useClass: TokeninterceptorInterceptor,
  multi:true
}