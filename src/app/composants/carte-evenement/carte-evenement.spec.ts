import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarteEvenement } from './carte-evenement';

describe('CarteEvenement', () => {
  let component: CarteEvenement;
  let fixture: ComponentFixture<CarteEvenement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarteEvenement],
    }).compileComponents();

    fixture = TestBed.createComponent(CarteEvenement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
