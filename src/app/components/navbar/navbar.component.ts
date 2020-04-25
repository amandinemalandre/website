import { NavbarConfiguration } from 'src/app/model/navbar-configuration.model';

import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() justifyContentStyle = 'center';
  @Input() configuration: NavbarConfiguration[];

  mobile: boolean;
  collapsed: boolean;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth <= 864) {
      this.mobile = true;
      this.collapsed = true;
      this.justifyContentStyle = 'space-between';
    } else {
      this.mobile = false;
      this.collapsed = false;
      this.justifyContentStyle = 'center';
    }
  }

  constructor() { }

  ngOnInit() {
    if (window.screen.width <= 864) {
      this.mobile = true;
      this.collapsed = true;
      this.justifyContentStyle = 'space-between';
    }
  }

}
