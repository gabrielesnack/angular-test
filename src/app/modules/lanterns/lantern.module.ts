import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanternCardComponent } from './lantern-card/lantern-card.component';
import { SharedModule } from '../shared/shared.module';
import { LanternRoutingModule } from './lantern-routing.module';
import { LanternsComponent } from '~/app/pages/lanterns/lanterns.component';
@NgModule({
  declarations: [LanternCardComponent, LanternsComponent],
  imports: [CommonModule, LanternRoutingModule, SharedModule],
  exports: [CommonModule, SharedModule, LanternCardComponent],
})
export class LanternModule {}
