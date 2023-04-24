import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidpathComponent } from './invalidpath.component';

describe('InvalidpathComponent', () => {
  let component: InvalidpathComponent;
  let fixture: ComponentFixture<InvalidpathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvalidpathComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvalidpathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
