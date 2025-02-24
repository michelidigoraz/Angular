import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UnoComponent } from './uno/uno.component';
import { DosComponent } from './dos/dos.component';
import { TresComponent } from './tres/tres.component';
import { Ejercicio1Component } from './ejercicio1/ejercicio1.component';

export const routes: Routes = [
    {path: '' , component: HomeComponent},
    {path: 'uno', component: UnoComponent},
    {path: 'dos', component: DosComponent},
    {path: "tres", component: TresComponent},
    {path: "ejercicio1", component: Ejercicio1Component }
 ];
