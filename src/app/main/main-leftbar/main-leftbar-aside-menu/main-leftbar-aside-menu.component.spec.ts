import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLeftbarAsideMenuComponent } from './main-leftbar-aside-menu.component';

describe('MainLeftbarAsideMenuComponent', () => {
  let component: MainLeftbarAsideMenuComponent;
  let fixture: ComponentFixture<MainLeftbarAsideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainLeftbarAsideMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainLeftbarAsideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
