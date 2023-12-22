import { Component, OnInit } from '@angular/core';
import { elements } from '../dummy-data';
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

  constructor(private sanitizer: DomSanitizer) { 
    this.items = elements;
    // this.text = this.sanitizer.bypassSecurityTrustHtml(this.items.text.code);
    
  }
  
  ngOnInit(): void {
  }
  
  getHtml(item:any) {
    return this.sanitizer.bypassSecurityTrustHtml(item.code);
  }
}
