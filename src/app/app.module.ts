import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { provideCharts, withDefaultRegisterables } from 'ng2-charts';


import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { PagesModule } from './pages/pages.module';

import { AppComponent } from './app.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';


@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    PagesModule,
  ],
  providers: [provideCharts(withDefaultRegisterables())],
  bootstrap: [AppComponent]
})
export class AppModule { }
