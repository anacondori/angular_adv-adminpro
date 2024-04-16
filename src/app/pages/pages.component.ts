import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

//como decirle a TYPESCRIPT que la funcion existe y q la use
declare function customInitFunctions():any;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: ``
})
export class PagesComponent implements OnInit{

  //<link href="./assets/css/colors/default-dark.css" id="theme" rel="stylesheet">
  //public linkTheme = document.querySelector('#theme');

  constructor(private _setServ: SettingsService){}

  ngOnInit(): void {
    // const url = localStorage.getItem('theme') || './assets/css/colors/default-dark.css';
    // this.linkTheme!.setAttribute('href',url);

    customInitFunctions();
  }

}
