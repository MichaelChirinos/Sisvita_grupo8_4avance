import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRealizadosComponent } from './test-realizados.component';

describe('TestRealizadosComponent', () => {
  let component: TestRealizadosComponent;
  let fixture: ComponentFixture<TestRealizadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestRealizadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestRealizadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
