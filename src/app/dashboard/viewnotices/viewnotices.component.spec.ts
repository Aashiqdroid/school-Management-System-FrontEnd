import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewnoticesComponent } from './viewnotices.component';

describe('ViewnoticesComponent', () => {
  let component: ViewnoticesComponent;
  let fixture: ComponentFixture<ViewnoticesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewnoticesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewnoticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
