import { Component ,Input, OnInit} from '@angular/core';
import { Calsado } from '../../models/calsado.model';
@Component({
  selector: 'app-calsado',
  templateUrl: './calsado.component.html',
  styleUrl: './calsado.component.css'
})
export class CalsadoComponent implements OnInit {
  @Input() calsado: Calsado = {
    title: '',
    price: 0,
    images: [],
    id: 0,
    descripcion: ''
  };
  constructor() { }

  
  ngOnInit() {
    this.cargarDescripcion(); 
  }

  cargarDescripcion() {
    const descripcionGuardada = localStorage.getItem('descripcion');
    if (descripcionGuardada) {
      this.calsado.descripcion = descripcionGuardada;
    }
  }


  guardarDescripcion() {
    localStorage.setItem('descripcion', this.calsado.descripcion);
  }
}
