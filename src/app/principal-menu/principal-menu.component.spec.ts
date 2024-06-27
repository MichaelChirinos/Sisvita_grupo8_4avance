import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:src/app/listar-tipo-test/listar-tipo-test.component.spec.ts
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
========
import { PrincipalMenuComponent } from './principal-menu.component';

describe('PrincipalMenuComponent', () => {
  let component: PrincipalMenuComponent;
  let fixture: ComponentFixture<PrincipalMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrincipalMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrincipalMenuComponent);
>>>>>>>> 12b7964379b545fca4f1b82078886390d4e372f3:src/app/principal-menu/principal-menu.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
