import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: ``
})
export class AccountSettingsComponent implements OnInit{
    //<link href="./assets/css/colors/default-dark.css" id="theme" rel="stylesheet">
    //public linkTheme = document.querySelector('#theme');

    //public links!: NodeListOf<Element>;

    constructor(private _setServ: SettingsService){}

    ngOnInit(): void {
      //this.links = document.querySelectorAll('.selector');
      //this.checkCurrentTheme();
      this._setServ.checkCurrentTheme();
    }


    changeTheme( theme: string){
      // console.log(theme);
      //const url = `./assets/css/colors/${theme}.css`;
      // console.log(linkTheme,url);
      //this.linkTheme!.setAttribute('href',url);
      //localStorage.setItem('theme',url);
      //this.checkCurrentTheme();

      this._setServ.changeTheme( theme );
    }

    // checkCurrentTheme() {
    //   this.links.forEach( (elem) => {
    //       elem.classList.remove('working');

    //       const btnTheme     = elem.getAttribute('data-theme');
    //       const btnThemeUrl  = `./assets/css/colors/${btnTheme}.css`;
    //       const currentTheme = this.linkTheme?.getAttribute('href');

    //       if (btnThemeUrl === currentTheme) {
    //          elem.classList.add('working');
    //       }
    //     }
    //   );
    // }
}
