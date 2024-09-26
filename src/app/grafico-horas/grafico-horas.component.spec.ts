import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoHorasComponent } from './grafico-horas.component';

describe('GraficoHorasComponent', () => {
  let component: GraficoHorasComponent;
  let fixture: ComponentFixture<GraficoHorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraficoHorasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoHorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
