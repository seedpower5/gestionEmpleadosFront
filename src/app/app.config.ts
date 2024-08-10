import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';  // Importa la función para importar módulos
import { ReactiveFormsModule, FormsModule } from '@angular/forms';  // Importa los módulos de formularios
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),       // Proveedor para las rutas
    provideHttpClient(),         // Proveedor para HttpClient
    importProvidersFrom(ReactiveFormsModule, FormsModule),  // Importa los módulos de formularios
  ],
};
