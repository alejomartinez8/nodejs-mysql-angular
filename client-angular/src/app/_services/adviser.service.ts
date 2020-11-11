import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Adviser } from '../_model/adviser';

const API_URL = 'http://localhost:5000/api/v1/advisers/';

@Injectable({
  providedIn: 'root'
})
export class AdviserService {

  constructor(private http: HttpClient) { }

  create(adviser: Adviser): Observable<any> {
    return this.http.post(API_URL, adviser, { responseType: 'json' });
  }

  getAllAdvisers(): Observable<any> {
    return this.http.get(API_URL, { responseType: 'json' });
  }

  getById(id: number): Observable<any> {
    const url = `${API_URL}/${id}`;
    return this.http.get(url, { responseType: 'json' });
  }

  update(id: number, adviser: Adviser): Observable<any> {
    const url = `${API_URL}/${id}`;
    return this.http.put(url, { body: adviser }, { responseType: 'json' });
  }

  delete(id: number): Observable<any> {
    const url = `${API_URL}/${id}`;
    return this.http.delete(url, { responseType: 'json' });
  }
}
