import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTipoTestComponent } from './listar-tipo-test.component';

describe('ListarTipoTestComponent', () => {
  let component: ListarTipoTestComponent;
  let fixture: ComponentFixture<ListarTipoTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarTipoTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarTipoTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
