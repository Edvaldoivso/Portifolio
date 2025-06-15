import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndorComponent } from './indor.component';

describe('IndorComponent', () => {
  let component: IndorComponent;
  let fixture: ComponentFixture<IndorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndorComponent]
    });
    fixture = TestBed.createComponent(IndorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
