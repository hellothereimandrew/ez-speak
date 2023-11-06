import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRightbarComponent } from './main-rightbar.component';

describe('MainRightbarComponent', () => {
  let component: MainRightbarComponent;
  let fixture: ComponentFixture<MainRightbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainRightbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainRightbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
