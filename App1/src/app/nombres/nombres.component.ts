import { Component } from '@angular/core';

@Component({
  selector: 'app-nombres',
  imports: [],
  templateUrl: './nombres.component.html',
  styleUrl: './nombres.component.css'
})
export class NombresComponent {
  nombres: string[] = ['María', 'Paula', 'Alejandro', 'Michel'];
  
}
