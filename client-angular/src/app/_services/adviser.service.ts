import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:5000/api/v1/advisers/';

@Injectable({
  providedIn: 'root'
})
export class AdviserService {

  constructor(private http: HttpClient) { }

  getAllAdvisers(): Observable<any> {
    return this.http.get(API_URL, { responseType: 'text' });
  }
}
