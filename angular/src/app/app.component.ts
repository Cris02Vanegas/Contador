import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContadorPComponent } from "./components/contador-p/contador-p.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ContadorPComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
