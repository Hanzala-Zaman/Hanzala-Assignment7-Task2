import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NurseService {
  private apiUrl = 'https://api.digital4nurse.ch/api/public/nurse/9';

  constructor(private http: HttpClient) { }

  getNurseDetails(): Observable<any> {
    return this.http.get(this.apiUrl); 
  }
}

