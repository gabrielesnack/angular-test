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
  lanternsPaginated: ILantern[] = []
  currentPage = 0;
  perPage = 8;

  constructor(private lanternService: LanternService, private router: Router) {}

  ngOnInit(): void {
    this.getLanterns();
  }

  getLanterns() {
    this.lanterns = this.lanternService.getLanterns()
    this.getLanternsPaginated();
  }

  getLanternsPaginated() {
    const startAt = this.currentPage * this.perPage
    this.lanternsPaginated = this.lanterns.slice(startAt, startAt + this.perPage)
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

  handleCreate() {
    this.router.navigateByUrl(`/lanternas/cadastrar`)
  }

  handlePaginator(e: any) {
    this.currentPage = e.pageIndex;
    this.perPage = e.pageSize;
    this.getLanternsPaginated()
  }
}
