import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlEndPoint : string = 'http://localhost:8181/user';
  constructor(private http : HttpClient) { }

  get() : Observable<User[]> {
    return this.http.get<User[]>(this.urlEndPoint);
  }
}
