import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LanternService } from '@services/lantern/lantern.service';
import { ILantern } from '@services/lantern/types';
import { LanternForm } from './helpers';

@Component({
  selector: 'lantern-editor',
  templateUrl: './lantern-editor.component.html',
  styleUrls: ['./lantern-editor.component.scss'],
})
export class LanternEditorComponent implements OnInit {
  lanternFormHelper = new LanternForm()
  form = this.lanternFormHelper.build()

  @Output() onPreviewLantern = new EventEmitter<ILantern>()

  constructor(private lanternService: LanternService, private route: ActivatedRoute, private router: Router) {
    this.form.id.setValue(this.route.snapshot.params.id)
    this.router.events.subscribe(() => {
      this.form = new LanternForm().build()
      this.onPreviewLantern.emit(this.lanternFormHelper.unbuild(this.form))
    })
  }

  ngOnInit(): void {
    this.loadLantern();
  }

  ngDoCheck() {
    this.onPreviewLantern.emit(this.lanternFormHelper.unbuild(this.form)) //seria interessante utilizar o subscribe do rxjs ao invés de usar doCheck
  }

  save(e: Event): void {
    e.stopImmediatePropagation();
    if(!this.validateForm()) {
      return;
    }
    this.lanternService.setLantern(this.lanternFormHelper.unbuild(this.form));
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
      found && (this.form = this.lanternFormHelper.build(found))
    }
  }

  openDialogAvatar(dialog: any) {
    dialog.refOpenDialog()
  }

}
