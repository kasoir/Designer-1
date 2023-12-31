import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { defaultJWTPayload } from 'models/jwtpayload.model';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public UserDisplayName: string = '';
  constructor(
    private authService: AuthService,
  ) { }

  async ngOnInit() {
    this.UserDisplayName = this.authService.user.firstName[0] + this.authService.user.lastName[0]
  }
  
  async logout() {
    await this.authService.logoutUser();
  }
}
