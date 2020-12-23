import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'c-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {
  @Input() avatarClasses = '';
  @Input() imgUrl = '';
  @Input() imgAlt = '';

  constructor() {}

  ngOnInit(): void {}

}
