import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-main-leftbar-aside-menu',
  templateUrl: './main-leftbar-aside-menu.component.html',
  styleUrls: ['./main-leftbar-aside-menu.component.scss'],
})
export class MainLeftbarAsideMenuComponent implements OnInit {
  @Output() public hideOptions: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit(): void {}
}
