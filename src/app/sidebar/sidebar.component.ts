import { Component, OnInit } from '@angular/core';
import { PredefinedElements, elements } from '../dummy-data';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  test = ` color: black;
    backgorund-color: gray;
    cursor: move;
  `
  public items: any;
  public text: SafeHtml = '';
  private predefinedElements: PredefinedElements;

  constructor(private sanitizer: DomSanitizer) { 
    this.items = elements;
    this.predefinedElements = new PredefinedElements('text', 'input', 'Text Field', 'color: blue;','');
    this.predefinedElements.setHTMLElement();
    console.log(this.predefinedElements.getHTMLElement())
    this.text = this.sanitizer.bypassSecurityTrustHtml(this.predefinedElements.getHTMLElement());
  }
  
  ngOnInit(): void {
  }
  

  addText() {
    // Code to add text goes here
  }

  addButton() {
    // Code to add a button goes here
  }

  addLable() {
    // Code to add a button goes here
  }
}
