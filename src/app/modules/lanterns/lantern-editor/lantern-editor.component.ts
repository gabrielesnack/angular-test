import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LanternService } from '@services/lantern/lantern.service';
import { ILantern } from '@services/lantern/types';

@Component({
  selector: 'lantern-editor',
  templateUrl: './lantern-editor.component.html',
  styleUrls: ['./lantern-editor.component.scss'],
})
export class LanternEditorComponent implements OnInit {
  form: ILantern = {};

  constructor(private lanternService: LanternService, private route: ActivatedRoute) {
    this.form.id = this.route.snapshot.params.id
  }

  ngOnInit(): void {
    this.loadLantern();
  }

  setForm(obj: ILantern): void {
    this.form = {
      ...this.form,
      ...obj,
    };
  }

  save(e: Event): void {
    e.stopImmediatePropagation();
    this.lanternService.setLantern(this.form);
    console.log(this.form);
  }

  loadLantern(): void {
    if (this.form.id) {
      this.form = this.lanternService.findById(this.form.id) || {};
      console.log(this.form)
    }
  }
}
