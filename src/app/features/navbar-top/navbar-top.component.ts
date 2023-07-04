import {Component, OnInit} from '@angular/core';
import {Router, Route} from '@angular/router';

import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-navbar-top',
  templateUrl: './navbar-top.component.html',
  styleUrls: ['./navbar-top.component.scss']
})
export class NavbarTopComponent implements OnInit {
  title = environment.config.siteName;
  links: navItem[] = [];
  isMenuOpen: boolean = false;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    let route: Route;

    for (route of this.router.config) {
      let labelData: string | undefined = undefined;

      if (route.data) {
        labelData = route.data['label'];

        if (labelData) {
          const link: navItem = {path: `${route.path}`, label: labelData,};
          this.links.push(link);
        }
      }
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    if (this.isMenuOpen) {
      this.toggleMenu();
    }
  }

}

export interface navItem {
  icon?: string;
  path: string;
  label: string;
}
