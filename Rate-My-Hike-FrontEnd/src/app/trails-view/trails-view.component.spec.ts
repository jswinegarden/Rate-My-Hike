import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailsViewComponent } from './trails-view.component';

describe('TrailsViewComponent', () => {
  let component: TrailsViewComponent;
  let fixture: ComponentFixture<TrailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrailsViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
