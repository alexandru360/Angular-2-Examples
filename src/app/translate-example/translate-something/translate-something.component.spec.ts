import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateSomethingComponent } from './translate-something.component';

describe('TranslateSomethingComponent', () => {
  let component: TranslateSomethingComponent;
  let fixture: ComponentFixture<TranslateSomethingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranslateSomethingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslateSomethingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
