import { CdkDragDrop, copyArrayItem, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'designer';
  frameColor = '#ffffff';
  isDown = false;
  offset = [0, 0];
  position = [0, 0];
  isLocked = false;

  @ViewChild('frame') frame!: ElementRef;

  ngAfterViewInit() {
    this.frame.nativeElement.addEventListener('mousedown', (event: { clientX: number; clientY: number; }) => {
      this.isDown = true;
      this.offset = [
        this.frame.nativeElement.offsetLeft - event.clientX,
        this.frame.nativeElement.offsetTop - event.clientY
      ];
    }, true);

    document.addEventListener('mouseup', () => {
      this.isDown = false;
    }, true);

    document.addEventListener('mousemove', (event) => {
      event.preventDefault();
      if (this.isDown && !this.isLocked) {
        this.position = [
          event.clientX + this.offset[0],
          event.clientY + this.offset[1]
        ];
        this.frame.nativeElement.style.left = this.position[0] + 'px';
        this.frame.nativeElement.style.top  = this.position[1] + 'px';
      }
    }, true);
  }

  toggleLock() {
    this.isLocked = !this.isLocked;
  }

  selectedElement!: HTMLElement;

  selectElement(event: MouseEvent) {
    this.selectedElement = event.target as HTMLElement;
  }
}
