import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerAddComponent } from './seller-add.component';

describe('SellerAddComponent', () => {
  let component: SellerAddComponent;
  let fixture: ComponentFixture<SellerAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
