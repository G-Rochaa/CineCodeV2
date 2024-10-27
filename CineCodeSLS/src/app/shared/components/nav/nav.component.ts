import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent {
  @Output() searchTermChange = new EventEmitter<string>();

  onSearchTermChange(value: string) {
    this.searchTermChange.emit(value);
  }
}
