import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Modulos
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

//Componentes
import { NopagefoundComponent } from './nopagefound/nopagefound.component';



const routes: Routes = [
  // path: '/dashboard' PagesRouting
  {path:'', redirectTo:'dashboard', pathMatch: 'full'},
  // path: '/auth' AuthRouting

  {path:'**', component: NopagefoundComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    // RouterModule.forRoot(routes, { useHash: true }),
    AuthRoutingModule,
    PagesRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
