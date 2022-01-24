import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsCurrentComponent } from './shows-current.component';

describe('ShowsCurrentComponent', () => {
  let component: ShowsCurrentComponent;
  let fixture: ComponentFixture<ShowsCurrentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowsCurrentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowsCurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
