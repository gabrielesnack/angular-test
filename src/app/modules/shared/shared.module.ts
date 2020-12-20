import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { AvatarComponent } from '~/app/components/avatars/avatar/avatar.component';
import { BoxComponent } from '~/app/components/grids/box/box.component';

@NgModule({
  declarations: [AvatarComponent, BoxComponent],
  imports: [CommonModule, MatIconModule, MatCardModule],
  exports: [MatIconModule, MatCardModule, AvatarComponent, BoxComponent],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }
}
