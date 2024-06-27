import { ComponentFixture, TestBed } from '@angular/core/testing';
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
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
