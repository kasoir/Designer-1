import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-properties-bar',
  templateUrl: './properties-bar.component.html',
  styleUrls: ['./properties-bar.component.scss']
})
export class PropertiesBarComponent implements OnInit {

  @Input() element!: HTMLElement;
  showSidebar = true;
  constructor() { }

  ngOnInit(): void {
  }


get style() {
  return this.element.style.cssText;
}

set style(value: string) {
  this.element.style.cssText = value;
}
toggleSidebar() {
  this.showSidebar = !this.showSidebar;
}
}
