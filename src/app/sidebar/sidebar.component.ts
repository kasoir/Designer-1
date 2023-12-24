import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PredefinedElements } from '../dummy-data';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public items: SafeHtml[] = [];

  position = `
    position: absolute;
    top: 350px;
    left: 400%;
    cursor: move;
    z-index: 1000;
    border: 1px solid black;

    `
  constructor(private sanitizer: DomSanitizer, private cd: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }
  addText() {
    const predefinedElements: PredefinedElements = new PredefinedElements({
      tag: 'input',
      label: 'New Text Field',
      style: `${this.position}
        color: blue;
        height: 20px;
        width: 100px;`
    });
    predefinedElements.setTextHTMLElement();
    this.items.push(this.sanitizer.bypassSecurityTrustHtml(predefinedElements.getHTMLElement()));
    this.cd.detectChanges();
  }

  addButton() {
    const predefinedElements: PredefinedElements = new PredefinedElements({
      tag: 'button',
      label: 'Button',
      style: `${this.position}
      background-color: #a15b8c;
        color: #000000;
        height: 30px;
        width: 100px;
        border-radius: 5px;`,
    });
    predefinedElements.setLabelHTMLElement();
    this.items.push(this.sanitizer.bypassSecurityTrustHtml(predefinedElements.getHTMLElement()));
    this.cd.detectChanges();
  }

  addLabel() {
    const predefinedElements: PredefinedElements = new PredefinedElements({
      tag: 'label',
      label: 'New Label',
      style: `
        ${this.position}
          color: #000000;
          height: 20px;
          width: 100px;`,
    });
    predefinedElements.setLabelHTMLElement();
    this.items.push(this.sanitizer.bypassSecurityTrustHtml(predefinedElements.getHTMLElement()));
    this.cd.detectChanges();
  }
  addDropdown() {
    const predefinedElements: PredefinedElements = new PredefinedElements({
      tag: 'select',
      label: 'Dropdown',
      style: `
      ${this.position}
        color: #000000;
        height: 30px;
        width: 100px;`,
      options: ['Option 1', 'Option 2', 'Option 3'],  // Add your options here
    });
    predefinedElements.setDropdownHTMLElement();
    this.items.push(this.sanitizer.bypassSecurityTrustHtml(predefinedElements.getHTMLElement()));
    this.cd.detectChanges();
  }
  addTable() {
    const predefinedElements: PredefinedElements = new PredefinedElements({
      tag: 'table',
      label: 'Table',
      style: `
      ${this.position}
        color: #000000;
        height: 200px;
        width: 400px;
        `,
      tableOptions: {
        rows: 5,
        columns: 3,
        rowStyle: `border: 1px solid black;`
      }
    });
    predefinedElements.setTableHTMLElement();
    this.items.push(this.sanitizer.bypassSecurityTrustHtml(predefinedElements.getHTMLElement()));
    this.cd.detectChanges();
  }

  selectedElement!: HTMLElement;

  selectElement(event: MouseEvent) {
    this.selectedElement = event.target as HTMLElement;
  }
}
