import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from './empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService 
{
  //llamamos a la url del back
  private baseURL = "http://localhost:8080/api/v1/empleados";

  constructor(private httpClient: HttpClient) 
  {

  }
  //metodo para listar empleados
  obtenerListaEmpleados(): Observable<Empleado[]> 
  {
    return this.httpClient.get<Empleado[]>(`${this.baseURL}`);
  }
  //metodo para guardar empleado
  //le estoy enviando al back el empleado que registro en el formulario
  registrarEmpleado(empleado:Empleado) : Observable<Object>
  {
    return this.httpClient.post(`${this.baseURL}`,empleado);
  }
  
}
