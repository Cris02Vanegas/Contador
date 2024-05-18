import { Component,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-contador-h',
  standalone: true,
  imports: [],
  templateUrl: './contador-h.component.html',
  styleUrl: './contador-h.component.css'
})
export class ContadorHComponent {
  contador: number = 0;

  @Output() agregarNumero= new EventEmitter<number>();
 
  manejarClickAscendete(){
    this.contador +=1;
  }

  manejarClickDescendente(){
    this.contador -=1
  }

  enviarNumero(){
    this.agregarNumero.emit(this.contador);
  }
}
