import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NewsResp } from '../interfaces/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
    
  constructor(private http: HttpClient) {}
  getTopNews() {
    return this.http.get<NewsResp>(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=380edd757f3a49c18c0fb26364c57887`);
  }
}
