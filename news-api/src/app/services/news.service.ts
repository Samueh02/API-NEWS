import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Article, NewsResp } from '../interfaces/news';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private baseUrl = 'https://newsapi.org/v2/top-headlines';
  constructor(private http: HttpClient) {}
  getTopNews() {
    return this.http.get<NewsResp>(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=380edd757f3a49c18c0fb26364c57887`);
  }
  getTopHeadlinesByCategory(category: string): Observable<Article[]> {
    return this.http.get<NewsResp>(`${this.baseUrl}`, {
      params: {
        category,
        apiKey: '380edd757f3a49c18c0fb26364c57887',
        country: 'us' // Ajustar según necesidad
      }
    }).pipe(map(({ articles }) => articles));
  }

}
