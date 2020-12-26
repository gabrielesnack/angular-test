import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'lantern-card',
  templateUrl: './lantern-card.component.html',
  styleUrls: ['./lantern-card.component.scss'],
})
export class LanternCardComponent implements OnInit {
  @Input() name = '';
  @Input() avatarId : string | number = 1;
  @Input() description = '';
  @Input() bornIn = '';
  @Input() favorite = false;
  @Input() hideIcons = false;
  @Input() useClass = '';
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
