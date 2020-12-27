import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { scan } from 'rxjs/operators';

@Component({
  selector: 'lantern-select-zones',
  templateUrl: './lantern-zones.component.html',
  styleUrls: ['./lantern-zones.component.scss']
})
export class LanternZonesComponent implements OnInit {
  @Input() selectZones = new FormControl([]);
  totalZones = 3600;
  limitPerBatch = 50;
  data = Array.from({ length: this.totalZones }).map((_, i) => `Setor ${i + 1}`);
  offset = 0 ;
  options = new BehaviorSubject<string[]>([]);
  options$: Observable<string[]>;

  constructor() { 
    this.options$ = this.options.asObservable().pipe(
      scan((acc: Array<any>, curr: Array<any>) => {
        return [...acc, ...curr];
      }, [])
    );
  }

  ngOnInit(): void {
    this.getNextBatch();
  }

  getNextBatch() {
    const result = this.data.slice(this.offset, this.offset + this.limitPerBatch);
    this.options.next(result);
    this.offset += this.limitPerBatch;
  }

}
