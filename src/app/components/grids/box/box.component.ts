import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'c-grid-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
})
export class BoxComponent implements OnInit {
  @Input() useClass = '';

  constructor() {}

  ngOnInit(): void {}
}
