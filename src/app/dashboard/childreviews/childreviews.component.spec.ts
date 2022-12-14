import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildreviewsComponent } from './childreviews.component';

describe('ChildreviewsComponent', () => {
  let component: ChildreviewsComponent;
  let fixture: ComponentFixture<ChildreviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildreviewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildreviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
