import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
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
