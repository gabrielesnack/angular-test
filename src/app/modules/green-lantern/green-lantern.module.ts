import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreenLanternCardComponent } from './green-lantern-card/green-lantern-card.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [GreenLanternCardComponent],
  imports: [CommonModule, SharedModule],
  exports: [CommonModule, SharedModule, GreenLanternCardComponent],
})
export class GreenLanternModule {}
