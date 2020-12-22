import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lantern-card',
  templateUrl: './lantern-card.component.html',
  styleUrls: ['./lantern-card.component.scss'],
})
export class LanternCardComponent implements OnInit {
  @Input() name : any = '';
  @Input() description : any = '';
  @Input() bornIn : any = '';

  constructor() {}

  ngOnInit(): void {}
}
