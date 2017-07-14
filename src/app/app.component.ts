import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
// import { Navbar } from './global/navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public auth: AuthService) {
    auth.handleAuthentication();
  }

}
