import { Component } from '@angular/core';

@Component({
  selector: 'app-boton-habilitado',
  imports: [],
  templateUrl: './boton-habilitado.component.html',
  styleUrl: './boton-habilitado.component.css'
})
export class BotonHabilitadoComponent {
  habilitado :boolean =true;

  toggleHabilitar(): void{

    this.habilitado = !this.habilitado;
  }

}
