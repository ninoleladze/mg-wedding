import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.scss'
})
export class NavBar {
  protected readonly links = [
    { label: 'Home', fragment: 'home' },
    { label: 'Church Ceremony', fragment: 'church-ceremony' },
    { label: 'Civil Ceremony', fragment: 'civil-ceremony' },
    { label: 'Dinner', fragment: 'dinner' }
  ];
}
