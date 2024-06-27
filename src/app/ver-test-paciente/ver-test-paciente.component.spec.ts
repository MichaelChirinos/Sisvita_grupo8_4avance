import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerTestPacienteComponent } from './ver-test-paciente.component';

describe('VerTestPacienteComponent', () => {
  let component: VerTestPacienteComponent;
  let fixture: ComponentFixture<VerTestPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerTestPacienteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerTestPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
