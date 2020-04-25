import { Component } from '@angular/core';

import { NavbarConfiguration } from './model/navbar-configuration.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'amandine-website';
  readonly navbarConfiguration: NavbarConfiguration[] = [
    {title: 'Accueil', route: 'home'},
    {title: 'A propos de', route: 'about'},
    {title: 'Mes créations', route: 'creations'},
    {title: 'Contact', route: 'contact'},
  ];
}
