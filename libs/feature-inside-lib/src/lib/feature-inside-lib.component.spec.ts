import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureInsideLibComponent } from './feature-inside-lib.component';

describe('FeatureInsideLibComponent', () => {
  let component: FeatureInsideLibComponent;
  let fixture: ComponentFixture<FeatureInsideLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureInsideLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureInsideLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
