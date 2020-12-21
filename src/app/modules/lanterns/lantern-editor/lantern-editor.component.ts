import { Component, OnInit } from '@angular/core';
import { LanternService } from '@services/lantern/lantern.service';

@Component({
  selector: 'lantern-editor',
  templateUrl: './lantern-editor.component.html',
  styleUrls: ['./lantern-editor.component.scss'],
})
export class LanternEditorComponent implements OnInit {
  constructor(private lanternService: LanternService) {}

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
    this.lanternService.setLantern(this.form);
    console.log(this.form);
  }
}
