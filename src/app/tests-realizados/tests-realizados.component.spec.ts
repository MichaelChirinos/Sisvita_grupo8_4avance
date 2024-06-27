import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsRealizadosComponent } from './tests-realizados.component';

describe('TestsRealizadosComponent', () => {
  let component: TestsRealizadosComponent;
  let fixture: ComponentFixture<TestsRealizadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestsRealizadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestsRealizadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
