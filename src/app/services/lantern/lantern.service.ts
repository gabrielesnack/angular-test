import { Injectable } from '@angular/core';
import { ILantern } from './types';

@Injectable({
  providedIn: 'root',
})
export class LanternService {
  lanterns: ILantern[] = [];

  constructor() {
    this.lanterns = this.getLanterns();
  }

  setLantern(lantern: ILantern) {
    const pos = this.lanterns.findIndex((e) => e.id == lantern.id);
    pos != -1 ? (this.lanterns[pos] = lantern) : this.lanterns.push({ id: this.genRandomId(), ...lantern });
    this.setLanternsToLocalStorage();
  }

  getLanterns() {
    return (this.lanterns.length && this.lanterns) || this.getLanternsFromLocalStorage();
  }

  private getLanternsFromLocalStorage(): ILantern[] {
    const store = window.localStorage.getItem('lanterns');
    return JSON.parse(store || '[]');
  }

  private setLanternsToLocalStorage(): void {
    window.localStorage.setItem('lanterns', JSON.stringify(this.lanterns));
  }

  private genRandomId() {
    return Math.random().toString(36).substring(2);
  }
}