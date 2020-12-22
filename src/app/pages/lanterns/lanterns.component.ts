import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanternService } from '@services/lantern/lantern.service';
import { ILantern } from '@services/lantern/types';

@Component({
  selector: 'app-lanterns',
  templateUrl: './lanterns.component.html',
  styleUrls: ['./lanterns.component.scss'],
})
export class LanternsComponent implements OnInit {
  lanterns: ILantern[] = []

  constructor(private lanternService: LanternService, private router: Router) {}

  ngOnInit(): void {
    this.getLanterns();
  }

  getLanterns() {
    this.lanterns = this.lanternService.getLanterns()
  }

  handleFavoriteLantern(value: boolean, lantern: ILantern) {
    const payload = {
      ...lantern,
      isFavorite: value
    }
    this.lanternService.setLantern(payload);
    this.getLanterns();
  }

  handleCardClick(id?: string | number) {
    this.router.navigateByUrl(`/lanternas/${id}`)
  }
}
