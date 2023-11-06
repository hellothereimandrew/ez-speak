import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthSignUpPassRemindComponent } from './auth-sign-up-pass-remind.component';

describe('AuthSignUpPassRemindComponent', () => {
  let component: AuthSignUpPassRemindComponent;
  let fixture: ComponentFixture<AuthSignUpPassRemindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthSignUpPassRemindComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthSignUpPassRemindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
