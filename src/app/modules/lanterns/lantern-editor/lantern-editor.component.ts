import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lantern-editor',
  templateUrl: './lantern-editor.component.html',
  styleUrls: ['./lantern-editor.component.scss'],
})
export class LanternEditorComponent implements OnInit {
  constructor() {}

  form = {};

  ngOnInit(): void {}

  setForm(obj: object) {
    this.form = {
      ...this.form,
      ...obj,
    };
  }

  save(e: any) {
    e.stopImmediatePropagation();
    console.log(this.form);
  }
}
