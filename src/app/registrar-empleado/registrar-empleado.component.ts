import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { Router } from '@angular/router';  // Cambia la importación del Router

@Component({
  selector: 'app-registrar-empleado',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css']
})
export class RegistrarEmpleadoComponent implements OnInit {
  empleado: Empleado = new Empleado();

  constructor(private empleadoServicio: EmpleadoService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.empleado);
  }

  // Método para guardar empleado que llama al service
  guardarEmpleado() {
    this.empleadoServicio.registrarEmpleado(this.empleado).subscribe(dato => {
      console.log(dato);
      // Una vez guardado volvemos a listar empleado
      this.volverHome();
    }, error => console.log(error));
  }

  // Método volver a listaEmpleados
  volverHome() {
    this.router.navigate(['/empleados']);  // Navega a la ruta de empleados
  }

  // Método submit que utilizo en el formulario
  onSubmit() {
    this.guardarEmpleado();
    console.log(this.empleado);
  }
}
