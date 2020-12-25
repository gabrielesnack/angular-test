import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'c-global-navbar',
  templateUrl: './global-navbar.component.html',
  styleUrls: ['./global-navbar.component.scss']
})
export class GlobalNavbarComponent implements OnInit {
  baseAppUrl = window.location.origin;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleRedirect(event: Event, to: string) {
    event.preventDefault();
    this.router.navigateByUrl(to);
  }
}
