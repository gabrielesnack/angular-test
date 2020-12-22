import { Component, OnInit } from '@angular/core';
import { LanternService } from '@services/lantern/lantern.service';
import { ILantern } from '@services/lantern/types';

@Component({
  selector: 'app-lanterns',
  templateUrl: './lanterns.component.html',
  styleUrls: ['./lanterns.component.scss'],
})
export class LanternsComponent implements OnInit {
  lanterns: ILantern[] = []

  constructor(private lanternService: LanternService) {}

  ngOnInit(): void {
    this.getLanterns();
  }

  getLanterns() {
    this.lanterns = this.lanternService.getLanterns()
  }
}
