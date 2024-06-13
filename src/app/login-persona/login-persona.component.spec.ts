import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPersonaComponent } from './login-persona.component';

describe('LoginPersonaComponent', () => {
  let component: LoginPersonaComponent;
  let fixture: ComponentFixture<LoginPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginPersonaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
