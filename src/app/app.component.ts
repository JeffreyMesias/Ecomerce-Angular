import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from './models/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'KM-MOTOR';
  http = inject(HttpClient);
  productos: Article[] = [];
  ocultarProductos = true; // Controla la visibilidad de los productos

  ngOnInit() {
    this.loadProducts('productos');
  }

  loadProducts(category: string) {
    let url = 'https://api.escuelajs.co/api/v1/products';
    
    switch (category) {
      case 'calsado':
        url = 'https://api.escuelajs.co/api/v1/categories/4/products';
        break;
      case 'electrodomesticos':
        url = 'https://api.escuelajs.co/api/v1/categories/2/products';
        break;
      case 'muebles':
        url = 'https://api.escuelajs.co/api/v1/categories/3/products';
        break;
      default:
        break;
    }

    this.http.get<Article[]>(url)
      .subscribe((data) => {
        this.productos = data;
        this.ocultarProductos = false; // Muestra los productos después de cargar
      });
  }

  toggleDiv(event: Event, alias: string) {
    event.preventDefault();
    this.loadProducts(alias);
  }

  goToHome() {
    this.ocultarProductos = true; // Oculta los productos
    this.productos = []; // Limpia la lista de productos
  }
}
