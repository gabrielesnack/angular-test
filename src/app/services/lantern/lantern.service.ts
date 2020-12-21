import { Injectable } from '@angular/core';
import { ILanterns } from './types';

@Injectable({
  providedIn: 'root',
})
export class LanternService {
  lanterns: ILanterns[] = [
    {
      name: 'Gabriel',
      age: '7',
      bornIn: 'Terra',
    },
  ];

  constructor() {}

  getLanterns() {
    return this.lanterns;
  }
}
