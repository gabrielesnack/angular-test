import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'lantern-card',
  templateUrl: './lantern-card.component.html',
  styleUrls: ['./lantern-card.component.scss'],
})
export class LanternCardComponent implements OnInit {
  @Input() name : any = '';
  @Input() description : any = '';
  @Input() bornIn : any = '';
  @Input() favorite: any = false;
  @Input() hideIcons : boolean = false;
  @Output() onFavorite = new EventEmitter<boolean>();
  @Output() onCardClick = new EventEmitter<null>();

  constructor() {}

  ngOnInit(): void {}

  handleFavorite() {
    this.onFavorite.emit(!this.favorite);
  }
  handleCardClick() {
    this.onCardClick.emit();
  }
}
