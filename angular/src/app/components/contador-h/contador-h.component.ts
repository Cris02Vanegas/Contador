import { Component,Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contador-h',
  standalone: true,
  imports: [],
  templateUrl: './contador-h.component.html',
  styleUrl: './contador-h.component.css'
})
export class ContadorHComponent {
  contador: number = 0;
  resultadoSuma: number =0;

  @Input() nombre: string = "pepita";

  @Output() agregarNumero = new EventEmitter<string>();


  manejarClickAscendete(){
    this.contador = this.contador + 1;
    this.resultadoSuma = this.contador;
  console.log(this.resultadoSuma);
  }

  

  manejarClickDescendente(){
    this.contador -=1
    console.log(this.contador);
  }

  enviarNumero(){
    this.agregarNumero.emit(this.nombre);
  }

}
