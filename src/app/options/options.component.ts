import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss'],
})
export class OptionsComponent implements OnInit {
  public selectedOption: string = '';
  public optionsList: string[] = ['account', 'general', 'periphery', 'channels'];

  ngOnInit(): void {}

  public selectOption(): void {}
}
