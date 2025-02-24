import { Component } from '@angular/core';
import { HelloComponent } from '../hello/hello.component';
import { ContadorComponent } from '../contador/contador.component';
import { NombresComponent } from '../nombres/nombres.component';
import { DataBindingComponent } from '../data-binding/data-binding.component';
import { BotonHabilitadoComponent } from '../boton-habilitado/boton-habilitado.component';


@Component({
  selector: 'app-uno',
  imports: [HelloComponent,
            ContadorComponent,
            NombresComponent,
            DataBindingComponent,
            BotonHabilitadoComponent],
  templateUrl: './uno.component.html',
  styleUrl: './uno.component.css'
})
export class UnoComponent {

}
