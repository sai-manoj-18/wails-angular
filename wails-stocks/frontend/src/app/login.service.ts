import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http: HttpClient) { }

  public getCredentials(): Observable<any>{
    return this.http.get("assets/credentials.json").pipe(map(data =>{
      return data
    }))
  }

  public getStocksData(): Observable<any>{
    return this.http.get("assets/Stocks.Json").pipe(map(data =>{
      return data
    }))
  }

  public getSimpledata() {
    return of('aaaa').pipe(delay(500))
  }
}
