import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsLeftbarComponent } from './options-leftbar.component';

describe('OptionsLeftbarComponent', () => {
  let component: OptionsLeftbarComponent;
  let fixture: ComponentFixture<OptionsLeftbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionsLeftbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionsLeftbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
