import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlEndPoint : string = 'http://localhost:8181/user';
  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http : HttpClient) { }

  get() : Observable<User[]> {
    return this.http.get<User[]>(this.urlEndPoint);
  }

  create(user : User) : Observable<any> {
    return this.http.post<any>(this.urlEndPoint, user, { headers: this.httpHeaders });
  }

  delete(id : number) : Observable<any> {
    return this.http.delete<any>(`${this.urlEndPoint}/${id}`, { headers: this.httpHeaders });
  }
}
