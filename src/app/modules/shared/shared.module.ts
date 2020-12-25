import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { AvatarComponent } from '@components/avatars/avatar/avatar.component';
import { BoxComponent } from '@components/grids/box/box.component';
import { BaseInputComponent } from '@components/inputs/base-input/base-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomPaginator } from '@components/CustomPaginator';
import { ErrorComponent } from '~/app/components/layouts/error/error.component';

@NgModule({
  declarations: [AvatarComponent, BoxComponent, BaseInputComponent, ErrorComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatPaginatorModule,
    MatDialogModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatPaginatorModule,
    AvatarComponent,
    BoxComponent,
    BaseInputComponent,
    MatDialogModule,
    ErrorComponent
  ],
  providers: [{ provide: MatPaginatorIntl, useClass: CustomPaginator}],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [],
    };
  }
}
