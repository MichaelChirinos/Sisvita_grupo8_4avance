import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleTipoTestComponent } from './detalle-tipo-test.component';

describe('DetalleTipoTestComponent', () => {
  let component: DetalleTipoTestComponent;
  let fixture: ComponentFixture<DetalleTipoTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleTipoTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalleTipoTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
