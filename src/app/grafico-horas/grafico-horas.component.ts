import { Component, OnInit } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { EmpleadoService } from '../empleado.service';  // Importar el servicio que obtendrá los datos
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-grafico-horas',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './grafico-horas.component.html',
  styleUrls: ['./grafico-horas.component.css']
})
export class GraficoHorasComponent implements OnInit {
  public chartOptions: Partial<ChartOptions>;

  constructor(private empleadoService: EmpleadoService) {
    this.chartOptions = {
      series: [
        {
          name: "Horas trabajadas",
          data: []
        }
      ],
      chart: {
        type: "bar",
        height: 350
      },
      xaxis: {
        categories: []  // Aquí se mostrarán los nombres de los empleados
      },
      dataLabels: {
        enabled: false
      },
      title: {
        text: "Horas trabajadas por empleado"
      }
    };
  }

  ngOnInit(): void {
    this.cargarHorasTrabajadas();
  }

  // Método para cargar las horas trabajadas de los empleados
  private cargarHorasTrabajadas() {
    this.empleadoService.obtenerListaEmpleados().subscribe((empleados) => {
      const nombres = empleados.map(emp => emp.nombre);  // Obtenemos los nombres
      const horas = empleados.map(emp => emp.horasTrabajadas);  // Obtenemos las horas trabajadas

      // Actualizamos las opciones del gráfico con los datos
      this.chartOptions = {
        ...this.chartOptions,  // Mantener el resto de las opciones
        series: [
          {
            name: "Horas trabajadas",
            data: horas  // Asignar las horas trabajadas
          }
        ],
        xaxis: {
          categories: nombres  // Asignar los nombres de los empleados en el eje X
        }
      };
    });
  }
}
