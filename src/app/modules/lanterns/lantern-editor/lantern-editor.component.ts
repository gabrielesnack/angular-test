import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LanternService } from '@services/lantern/lantern.service';
import { ILantern } from '@services/lantern/types';
import { lanternForm } from './helpers';

@Component({
  selector: 'lantern-editor',
  templateUrl: './lantern-editor.component.html',
  styleUrls: ['./lantern-editor.component.scss'],
})
export class LanternEditorComponent implements OnInit {
  form = new lanternForm().build()

  @Output() onPreviewLantern = new EventEmitter<ILantern>()

  constructor(private lanternService: LanternService, private route: ActivatedRoute) {
    this.form.id.setValue(this.route.snapshot.params.id)
  }

  ngOnInit(): void {
    this.loadLantern();
  }

  ngDoCheck() {
    this.onPreviewLantern.emit(lanternForm.unbuild(this.form)) //seria interessante utilizar o subscribe do rxjs ao invés de usar doCheck
  }

  save(e: Event): void {
    e.stopImmediatePropagation();
    if(!this.validateForm()) {
      return;
    }
    this.lanternService.setLantern(lanternForm.unbuild(this.form));
  }

  validateForm() {
    return (
      this.form.name.valid &&
      this.form.description.valid &&
      this.form.bornIn.valid &&
      this.form.age.valid
    )
  }

  loadLantern(): void {
    if (this.form.id) {
      const found = this.lanternService.findById(this.form.id.value);
      found && (this.form = new lanternForm(found).build())
    }
  }

  openDialogAvatar(dialog: any) {
    dialog.refOpenDialog()
  }

}
