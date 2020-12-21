import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LanternRoutingModule } from './lantern-routing.module';

//pages
import { LanternsComponent } from '@pages/lanterns/lanterns.component';
import { LanternDetailComponent } from '@pages/lantern-detail/lantern-detail.component';

//components
import { LanternCardComponent } from './lantern-card/lantern-card.component';
import { LanternEditorComponent } from './lantern-editor/lantern-editor.component';
@NgModule({
  declarations: [LanternCardComponent, LanternsComponent, LanternDetailComponent, LanternEditorComponent],
  imports: [CommonModule, LanternRoutingModule, SharedModule],
  exports: [CommonModule, SharedModule, LanternCardComponent],
})
export class LanternModule {}
