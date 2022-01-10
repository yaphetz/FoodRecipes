import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  darkmode = false;

  constructor() { }

  // to change the --color variable in src/style.scss
  // would affect theming since all the components use that variable
  // override in style.scss for components if required
  changeThemeToLeafyGreen(){
    document.documentElement.style.setProperty('--color', '#1b7742'); // veg : #1b7742
  }
  changeThemeToStarvingRed(){
    document.documentElement.style.setProperty('--color', '#f44336'); // non-veg: #e9493d;
  }
  changeThemeToChaiOrange(){
    document.documentElement.style.setProperty('--color', '#ff8f00'); // snack: #e98e17;
  }

  switchDarkMode(){
    if(this.darkmode == true)
    {
      document.documentElement.style.setProperty('--color', '#1b7742'); // snack: #e98e17;
      this.darkmode = false;
    }
    else
    {
      document.documentElement.style.setProperty('--color', '#000'); // snack: #e98e17;
      this.darkmode = true;
    }
  }

  ngOnInit() {
  }

}
