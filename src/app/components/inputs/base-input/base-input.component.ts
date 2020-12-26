import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'c-base-input',
  templateUrl: './base-input.component.html',
  styleUrls: ['./base-input.component.scss'],
})
export class BaseInputComponent implements OnInit {
  @Input() label = '';
  @Input() placeholder = '';

  @Input() value = new FormControl('');

  constructor() {}

  ngOnInit(): void {}
}
