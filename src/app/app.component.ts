import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Importa el servicio Router
import { RouterModule } from '@angular/router';  // Importa RouterModule para router-outlet

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],  // Importa RouterModule para utilizar router-outlet
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sistema gestión empleados';

  // Inyectamos el servicio Router en el constructor
  constructor(private router: Router) {}

  // Método para navegar a la lista de empleados
  irAListaEmpleados() {
    this.router.navigate(['/empleados']);
  }


}
