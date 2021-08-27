import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  constructor(private _http:HttpClient) { }
  //geting multiple users
  getUsersApiUrl="https://randomuser.me/api/?results=5000"
  getData():Observable<any>{
    return this._http.get<any>(this.getUsersApiUrl)

  }
}
