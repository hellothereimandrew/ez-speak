import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsRightbarComponent } from './options-rightbar.component';

describe('OptionsRightbarComponent', () => {
  let component: OptionsRightbarComponent;
  let fixture: ComponentFixture<OptionsRightbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionsRightbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionsRightbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
