import { Routes } from '@angular/router';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { RegistrarEmpleadoComponent } from './registrar-empleado/registrar-empleado.component';

export const routes: Routes = [
  { path: 'empleados', component: ListaEmpleadosComponent },
  { path: 'registrar-empleado', component: RegistrarEmpleadoComponent },
  { path: '', redirectTo: 'empleados', pathMatch: 'full' },
  { path: '**', redirectTo: 'empleados' }
];
