import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacFilterComponent } from './contac-filter.component';

describe('ContacFilterComponent', () => {
  let component: ContacFilterComponent;
  let fixture: ComponentFixture<ContacFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContacFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContacFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
