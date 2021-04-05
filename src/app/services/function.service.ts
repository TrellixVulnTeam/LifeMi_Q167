import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FunctionO } from 'src/app/model/function'

@Injectable({
  providedIn: 'root'
})
export class FunctionService {

  private urlEndPoint : string = 'http://localhost:8181/function';
  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http : HttpClient) { }

  get() : Observable<FunctionO[]> {
    return this.http.get<FunctionO[]>(this.urlEndPoint);
  }

  getById(id : number) : Observable<FunctionO> {
    return this.http.get<FunctionO>(`${this.urlEndPoint}/${id}`);
  }

  create(functionO : FunctionO) : Observable<any> {
    return this.http.post<any>(this.urlEndPoint, functionO, { headers: this.httpHeaders });
  }

  delete(id : number) : Observable<any> {
    return this.http.delete<any>(`${this.urlEndPoint}/${id}`, { headers: this.httpHeaders });
  }

  update(functionO : FunctionO) : Observable<any> {
    return this.http.put<any>(this.urlEndPoint, functionO, { headers: this.httpHeaders });
  }

}
