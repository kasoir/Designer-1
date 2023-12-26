import { ChangeDetectorRef, Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-properties-bar',
  templateUrl: './properties-bar.component.html',
  styleUrls: ['./properties-bar.component.scss']
})
export class PropertiesBarComponent implements OnInit, OnChanges {

  @Input() element!: HTMLElement;

  fontSize: string = '';
  borderSize: string = '';
  borderColor: string = '';
  borderStyle: string = '';
  fontColor: string = '';
  backgroundColor: string = '';
  position: string = '';
  top: string = '';
  left: string = '';
  transform: string = '';
  showSidebar = true;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getStyle();
  }

  ngOnChanges(): void {
    this.getStyle();
  }

  getStyle() {
    this.fontSize = this.element.style.fontSize;
    this.fontColor = this.element.style.color;
    this.backgroundColor = this.element.style.backgroundColor;
    this.borderSize = this.element.style.borderWidth;
    this.borderColor = this.element.style.borderColor;
    this.borderStyle = this.element.style.borderStyle;
    this.position = this.element.style.position;
    this.top = this.element.style.top;
    this.left = this.element.style.left;
    this.transform = this.element.style.transform;
    this.cd.detectChanges();
  }

  setStyle() {
    const value = this.setStyleProperties();
    this.element.style.cssText = value;
  }

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }

  setStyleProperties() {
    return `
    ${this.position?' position: '+ this.position + ';' : ''} 
    ${this.top?' top: '+ this.top + ';' : ''} 
    ${this.left?' left: '+ this.left + ';' : ''} 
    ${this.fontSize?' font-size: '+ this.fontSize + 'px;' : ''} 
    ${this.fontColor?' color: '+ this.fontColor + ';' : ''} 
    ${this.backgroundColor?' background-color: '+ this.backgroundColor + ';' : ''} 
    ${this.borderSize?' border: '+ this.borderSize+ ' ' + this.borderStyle + ' ' + this.borderColor + ';' : ''}`
  }
}
