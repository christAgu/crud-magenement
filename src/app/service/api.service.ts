import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private _http: HttpClient) {}

  //connect front-end to backend

  apiUrl = 'http://localhost:3000/user';

  //get all data

  getAllUser(): Observable<any> {
    return this._http.get(`${this.apiUrl}`);
  }

  //creat user
  creatUser(data: any): Observable<any> {
    return this._http.post(`${this.apiUrl}`, data);
  }

  //delete user
  deleteUser(id: any): Observable<any> {
    let ids = id;
    return this._http.delete(`${this.apiUrl}/${ids}`);
  }

  //update user

  updateUser(data: any, id: any): Observable<any> {
    let ids = id;
    return this._http.put(`${this.apiUrl}/${ids}`, data);
  }

  //get Single user

  getauser(id: any): Observable<any> {
    let ids = id;
    return this._http.get(`${this.apiUrl}/${ids}`);
  }
}
