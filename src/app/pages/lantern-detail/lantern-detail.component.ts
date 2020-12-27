import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LanternService } from '@services/lantern/lantern.service';
import { ILantern } from '@services/lantern/types';

@Component({
  selector: 'app-lantern-detail',
  templateUrl: './lantern-detail.component.html',
  styleUrls: ['./lantern-detail.component.scss'],
})
export class LanternDetailComponent implements OnInit {
  lantern: ILantern = {
    avatarId: 1,
    name: '',
    description: '',
    age: '',
    bornIn: '',
    isFavorite: false,
  };

  constructor(private lanternService: LanternService, private route: ActivatedRoute, private router: Router) {
    this.lantern.id = this.route.snapshot.params.id
  }

  ngOnInit(): void {
    this.loadLantern();
  }

  get isCreateHero(): boolean {
    return this.route.snapshot.params.id == 'cadastrar';
  }

  loadLantern(): void {
    if (this.lantern.id) {
      const found = this.lanternService.findById(this.lantern.id) 
      found && (this.lantern = found);
      !found && !this.isCreateHero && this.router.navigateByUrl('/pagina-nao-encontrada')
    }
  }

  handleErrorAction(to: string) {
    this.router.navigateByUrl(to)
  }
}
