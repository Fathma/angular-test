import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Author } from '../models/Author';
import { Authors } from '../models/Authors';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  url:string = 'https://api.quotable.io/authors';
  params:'?limit=10&skip=20'
  limit:number = 10
  skip:number = 0

  constructor(private http:HttpClient) { }

  getAuthors(current_page:number):Observable<Authors>{
    this.skip = this.skip+(current_page*this.limit)
    return this.http.get<Authors>(`${this.url}/?limit=${this.limit}&skip=${this.skip}`);
  }
}
