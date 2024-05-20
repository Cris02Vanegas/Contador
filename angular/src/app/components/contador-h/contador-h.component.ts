import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-contador-h',
  standalone: true,
  imports: [],
  templateUrl: './contador-h.component.html',
  styleUrl: './contador-h.component.css',
})
export class ContadorHComponent {
  contador: number = 0;

  @Output() agregarNumeroIncio = new EventEmitter<number>();
  @Output() agregarNumero = new EventEmitter<number>();

  manejarClickAscendete() {
    this.contador += 1;
  }

  manejarClickDescendente() {
    this.contador -= 1;
  }

  ManejarClickReset() {
    this.contador = 0;
  }

  numeroInicioConteo(numero: string) {
    this.contador = parseInt(numero);
  }

  enviarNumero() {
    this.agregarNumero.emit(this.contador);
  }
}
