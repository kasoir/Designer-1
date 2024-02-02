import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectedElement!: HTMLElement;

  selectElement(event: MouseEvent) {
    this.selectedElement = event.target as HTMLElement;
  }
}