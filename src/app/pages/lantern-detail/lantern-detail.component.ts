import { Component, OnInit } from '@angular/core';
import { LanternService } from '@services/lantern/lantern.service';
import { ILantern } from '@services/lantern/types';

@Component({
  selector: 'app-lantern-detail',
  templateUrl: './lantern-detail.component.html',
  styleUrls: ['./lantern-detail.component.scss'],
})
export class LanternDetailComponent implements OnInit {
  lanterns: ILantern[] = [];

  constructor(private lanternService: LanternService) {}

  ngOnInit(): void {
    this.getLanterns();
  }

  getLanterns() {
    this.lanterns = this.lanternService.getLanterns();
    console.log(this.lanterns);
  }
}
