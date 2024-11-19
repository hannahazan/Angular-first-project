import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:3000';
  http = inject(HttpClient);
  constructor() { }
  getArticle(){
    return this.http.get<Article[]>(`${this.baseUrl}/articles`)
  }
  getArticleById(id:number){
    return this.http.get<Article>(`${this.baseUrl}/articles/${id}`)
  }
}
