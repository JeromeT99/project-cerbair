import { Component, OnInit } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];

  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
  }

}
