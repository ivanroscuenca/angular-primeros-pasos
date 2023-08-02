import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<p>Counter : {{ counter }}</p>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="descreaseBy(1)">-1</button>`,
})
export class CounterComponent {
  public counter: number = 0;

  increaseBy(value: number): void {
    this.counter += value;
  }
  descreaseBy(value: number): void {
    this.counter -= value;
  }
  reset() {
    this.counter = 0;
  }
  constructor() {}
}
