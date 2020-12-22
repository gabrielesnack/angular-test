import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LanternService } from '@services/lantern/lantern.service';
import { ILantern } from '@services/lantern/types';

@Component({
  selector: 'app-lantern-detail',
  templateUrl: './lantern-detail.component.html',
  styleUrls: ['./lantern-detail.component.scss'],
})
export class LanternDetailComponent implements OnInit {
  lantern: ILantern = {};

  constructor(private lanternService: LanternService, private route: ActivatedRoute) {
    this.lantern.id = this.route.snapshot.params.id
  }

  ngOnInit(): void {
    this.loadLantern();
  }

  loadLantern(): void {
    if (this.lantern.id) {
      this.lantern = this.lanternService.findById(this.lantern.id) || {};
    }
  }
}
