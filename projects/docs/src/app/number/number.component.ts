import { Component } from '@angular/core';

@Component({
  selector: 'doc-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss']
})
export class NumberComponent {
  billion = 1000000000;

  example1: number | null = null;
  example1Label = 'Lorum ipsum';
  example1Min = 0;
  example1Max = 9;
  example1Step = 1;
  isExample1Disabled = false;
  isExample1Required = false;
  isExample1BrLeft = true;
  isExample1BrRight = true;

  example2: number | null = null;
  example2Label = 'Lorum ipsum';
  example2Min = 0;
  example2Max = 9;
  example2Step = 1;
  isExample2Disabled = false;
  isExample2Required = false;
  isExample2BrLeft = true;
  isExample2BrRight = true;

  constructor() { }
}
