import { Injectable } from '@angular/core';
import { ILantern } from './types';

@Injectable({
  providedIn: 'root',
})
export class LanternService {
  lanterns: ILantern[] = [];

  constructor() {
    this.lanterns = this.getLanternsFromLocalStorage();
  }

  setLanterns(lantern: ILantern) {}

  getLanterns() {
    return (this.lanterns.length && this.lanterns) || this.getLanternsFromLocalStorage();
  }

  private getLanternsFromLocalStorage(): ILantern[] {
    const store = window.localStorage.getItem('lanterns');
    return JSON.parse(JSON.stringify(store)) || [];
  }
}
