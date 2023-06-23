import {Component} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar-top',
  templateUrl: './navbar-top.component.html',
  styleUrls: ['./navbar-top.component.scss']
})
export class NavbarTopComponent {
  toggleSidenav(sidenav: MatSidenav) {
    sidenav.toggle();
  }
}
