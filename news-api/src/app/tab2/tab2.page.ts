import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service'; // Importa el servicio de noticias
import { Article } from 'src/app/interfaces/news'; // Asegúrate de importar la interfaz Article

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  // Definir el array de categorías
  public categories: string[] = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  // Definir los artículos que vamos a mostrar
  public articles: Article[] = [];
  // Categoría seleccionada por defecto
  public selectedCategory: string = 'general';

  constructor(private newsService: NewsService) {}

  // Método que se ejecuta al iniciar la página
  ngOnInit() {
    // Cargar noticias para la categoría seleccionada por defecto
    this.getNewsByCategory(this.selectedCategory);
  }

  // Método para manejar el cambio de segmento
  segmentChanged(event: any) {
    this.selectedCategory = event.detail.value; // Actualizar la categoría seleccionada
    this.getNewsByCategory(this.selectedCategory); // Cargar noticias para la nueva categoría
  }

  // Obtener noticias filtradas por categoría
  getNewsByCategory(category: string) {
    this.newsService.getTopHeadlinesByCategory(category).subscribe(articles => {
      this.articles = articles; // Actualizar los artículos con las noticias filtradas
    });
  }
}
