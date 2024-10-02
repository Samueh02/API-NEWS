// src/app/pages/tab1/tab1.page.ts
import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { Article } from 'src/app/interfaces/news';  // Asegúrate de importar correctamente la interfaz

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  articles: Article[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.newsService.getTopNews().subscribe(resp => {
      this.articles = resp.articles;
    });
  }
}
