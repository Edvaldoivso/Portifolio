import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolPlenoComponent } from './sol-pleno.component';

describe('SolPlenoComponent', () => {
  let component: SolPlenoComponent;
  let fixture: ComponentFixture<SolPlenoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolPlenoComponent]
    });
    fixture = TestBed.createComponent(SolPlenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
