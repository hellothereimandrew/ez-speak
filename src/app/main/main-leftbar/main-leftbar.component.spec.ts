import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLeftbarComponent } from './main-leftbar.component';

describe('MainLeftbarComponent', () => {
  let component: MainLeftbarComponent;
  let fixture: ComponentFixture<MainLeftbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainLeftbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainLeftbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
