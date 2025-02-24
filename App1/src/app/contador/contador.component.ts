import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {
  contador:number=0;

   aumentar() :void {
    this.contador ++;
  }
  disminuir() :void{
    this.contador--;
  }
}
