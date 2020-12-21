import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanternDetailComponent } from '@pages/lantern-detail/lantern-detail.component';
import { LanternsComponent } from '@pages/lanterns/lanterns.component';

const laternsRoutes: Routes = [
  {
    path: '',
    component: LanternsComponent,
  },
  {
    path: ':id',
    component: LanternDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(laternsRoutes)],
  exports: [RouterModule],
})
export class LanternRoutingModule {}
