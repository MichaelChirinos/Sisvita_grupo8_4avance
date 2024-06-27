import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:src/app/confirmar-test/confirmar-test.component.spec.ts
import { ConfirmarTestComponent } from './confirmar-test.component';

describe('ConfirmarTestComponent', () => {
  let component: ConfirmarTestComponent;
  let fixture: ComponentFixture<ConfirmarTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmarTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmarTestComponent);
========
import { RegistrarTestComponent } from './test.component';

describe('RegistrarTestComponent', () => {
  let component: RegistrarTestComponent;
  let fixture: ComponentFixture<RegistrarTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrarTestComponent);
>>>>>>>> 12b7964379b545fca4f1b82078886390d4e372f3:src/app/test/test.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
