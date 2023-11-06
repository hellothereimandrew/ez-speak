import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainChatSectionComponent } from './main-chat-section.component';

describe('MainChatSectionComponent', () => {
  let component: MainChatSectionComponent;
  let fixture: ComponentFixture<MainChatSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainChatSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainChatSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
