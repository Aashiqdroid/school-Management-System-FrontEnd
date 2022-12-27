import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentnoticesComponent } from './parentnotices.component';

describe('ParentnoticesComponent', () => {
  let component: ParentnoticesComponent;
  let fixture: ComponentFixture<ParentnoticesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentnoticesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentnoticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
