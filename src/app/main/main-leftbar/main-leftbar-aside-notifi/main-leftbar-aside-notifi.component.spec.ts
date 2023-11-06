import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLeftbarAsideNotifiComponent } from './main-leftbar-aside-notifi.component';

describe('MainLeftbarAsideNotifiComponent', () => {
  let component: MainLeftbarAsideNotifiComponent;
  let fixture: ComponentFixture<MainLeftbarAsideNotifiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainLeftbarAsideNotifiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainLeftbarAsideNotifiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
