import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddKartComponent } from './add-kart.component';

describe('AddKartComponent', () => {
  let component: AddKartComponent;
  let fixture: ComponentFixture<AddKartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddKartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddKartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
