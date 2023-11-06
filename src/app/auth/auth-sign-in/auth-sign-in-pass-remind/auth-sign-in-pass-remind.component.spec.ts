import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthSignInPassRemindComponent } from './auth-sign-in-pass-remind.component';

describe('AuthSignInPassRemindComponent', () => {
  let component: AuthSignInPassRemindComponent;
  let fixture: ComponentFixture<AuthSignInPassRemindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthSignInPassRemindComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthSignInPassRemindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
