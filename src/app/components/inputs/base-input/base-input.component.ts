import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'c-base-input',
  templateUrl: './base-input.component.html',
  styleUrls: ['./base-input.component.scss'],
})
export class BaseInputComponent implements OnInit {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() value:any = '';
  @Output() onInput = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}
  emit(value: any) {
    this.onInput.emit(value);
  }
}
