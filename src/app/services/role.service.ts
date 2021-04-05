import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Role } from '../model/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private urlEndPoint : string = 'http://localhost:8181/role';
  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http : HttpClient) { }

  get() : Observable<Role[]> {
    return this.http.get<Role[]>(this.urlEndPoint);
  }

  getById(id : number) : Observable<Role> {
    return this.http.get<Role>(`${this.urlEndPoint}/${id}`);
  }

  create(user : Role) : Observable<any> {
    return this.http.post<any>(this.urlEndPoint, user, { headers: this.httpHeaders });
  }

  delete(id : number) : Observable<any> {
    return this.http.delete<any>(`${this.urlEndPoint}/${id}`, { headers: this.httpHeaders });
  }

  update(user : Role) : Observable<any> {
    return this.http.put<any>(this.urlEndPoint, user, { headers: this.httpHeaders });
  }
}
