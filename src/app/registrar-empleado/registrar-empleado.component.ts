import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';  // Importa SweetAlert2

@Component({
  selector: 'app-registrar-empleado',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css']
})
export class RegistrarEmpleadoComponent implements OnInit {
  empleado: Empleado = new Empleado();  // Modelo del empleado

  constructor(
    private empleadoServicio: EmpleadoService,  // Servicio para gestionar empleados
    private router: Router  // Router para redirigir
  ) { }

  ngOnInit(): void {
    console.log(this.empleado);  // Imprime el empleado en la consola al iniciar
  }

  // Método para guardar el empleado y luego redirigir
  guardarEmpleado() {
    this.empleadoServicio.registrarEmpleado(this.empleado).subscribe(
      dato => {
        console.log(dato);  // Imprime los datos de respuesta en la consola
        // Muestra la alerta de éxito con SweetAlert2
        Swal.fire({
          title: '¡Empleado creado!',
          text: 'El empleado ha sido registrado correctamente.',
          icon: 'success',
          confirmButtonText: 'Aceptar'
        }).then((result) => {
          if (result.isConfirmed) {
            // Redirige a la lista de empleados después de aceptar el mensaje
            this.volverHome();
          }
        });
      },
      error => {
        console.log(error);  // Imprime el error en la consola

        // Muestra la alerta de error con SweetAlert2
        Swal.fire({
          title: 'Error al crear empleado',
          text: 'Ha ocurrido un error al crear el empleado. Verifica los datos ingresados.',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
      }
    );
  }

  // Método para redirigir a la lista de empleados
  volverHome() {
    this.router.navigate(['/empleados']);  // Redirige a la ruta de empleados
  }

  // Método que se llama al enviar el formulario
  onSubmit() {
    console.log(this.empleado);  // Imprime el empleado en la consola
    this.guardarEmpleado();  // Guarda el empleado
  }
}
