import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  async ngOnInit() {
    if ( !(await this.authService.verifyUserToken()) ) {
			this.router.navigateByUrl( '/auth/login' );
		}
    if ( this.authService.isAttacked ) {
			this.authService.logoutUser();
		}
		this.authService.isAttacked = true;
  }

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
