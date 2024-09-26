import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';  // Importa el Router para navegación
import Swal from 'sweetalert2';
import { GraficoHorasComponent } from '../grafico-horas/grafico-horas.component';  // Importa el componente del gráfico

@Component({
  selector: 'app-lista-empleados',
  standalone: true,
  imports: [CommonModule, GraficoHorasComponent],  // Añade el componente gráfico
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {
  empleados: Empleado[] = [];

  constructor(private empleadosServicio: EmpleadoService, private router: Router) { } // Inyecta Router

  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  private obtenerEmpleados() {
    this.empleadosServicio.obtenerListaEmpleados().subscribe(dato => {
      this.empleados = dato;
    });
  }

  eliminarEmpleado(id: number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "No podrás revertir esta acción",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'No, cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.empleadosServicio.eliminarEmpleado(id).subscribe(
          () => {
            this.empleados = this.empleados.filter(empleado => empleado.id !== id);
            Swal.fire(
              'Eliminado',
              'El empleado ha sido eliminado correctamente.',
              'success'
            );
          },
          error => console.log(error)
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'La eliminación ha sido cancelada',
          'error'
        );
      }
    });
  }

  // Nueva función para redirigir a registrar empleado
  irARegistrarEmpleado() {
    this.router.navigate(['/registrar-empleado']);  // Redirige al componente de registro
  }
}
