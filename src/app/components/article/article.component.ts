import { Component ,Input, OnInit} from '@angular/core';
import { Article } from '../../models/article.model';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit {
  @Input() articles: Article = {
    title: '',
    price: 0,
    images: [],
    id: 0,
    descripcion: ''
  };
  constructor() { }
  aplicarFiltro() {
    // Lógica para aplicar un filtro a los artículos
    // Esto podría ser una llamada a la API o un filtrado en el array de artículos
    console.log('Filtro aplicado');
    // Por ejemplo: this.articles = this.filtrarArticulos(this.articles);
  }
  
  ngOnInit() {
    this.cargarDescripcion(); 
  }

  cargarDescripcion() {
    const descripcionGuardada = localStorage.getItem('descripcion');
    if (descripcionGuardada) {
      this.articles.descripcion = descripcionGuardada;
    }
  }

   // Ejemplo de función para filtrar artículos (puedes implementar tu propia lógica)
   mostrarDescripcion(): {
    // Filtrar lógica aquí (por ejemplo, por precio o por categoría)

    
  }

  guardarDescripcion() {
    localStorage.setItem('descripcion', this.articles.descripcion);
  }
}
