import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanternsComponent } from '~/app/pages/lanterns/lanterns.component';

const laternsRoutes: Routes = [
  {
    path: '',
    component: LanternsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(laternsRoutes)],
  exports: [RouterModule],
})
export class LanternRoutingModule {}
