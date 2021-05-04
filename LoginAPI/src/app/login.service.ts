import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
login(data: any):Observable<any>{
  return this.http.post(`https://api.dev.gdayhive.com/api/user/sign-in`,data);
}

}

