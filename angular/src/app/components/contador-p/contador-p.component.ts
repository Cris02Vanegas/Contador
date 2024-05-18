import { Component } from '@angular/core';
import { ContadorHComponent } from "../contador-h/contador-h.component";

@Component({
  selector: 'app-contador-p',
  standalone: true,
  imports: [ContadorHComponent],
  templateUrl: './contador-p.component.html',
  styleUrl: './contador-p.component.css'
})
export class ContadorPComponent {

  recibirNumero: string="";
  
  enviarNumero(nombre:string){
   this.recibirNumero = nombre;
  }
}
