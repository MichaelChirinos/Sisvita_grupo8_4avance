import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalEspecialistaComponent } from './principal-especialista.component';

describe('PrincipalEspecialistaComponent', () => {
  let component: PrincipalEspecialistaComponent;
  let fixture: ComponentFixture<PrincipalEspecialistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrincipalEspecialistaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrincipalEspecialistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
