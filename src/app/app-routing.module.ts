import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { CardapioComponent } from './cardapio/cardapio.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  { path: 'admin', component: AdminComponent },
  { path: 'cardapio', component: CardapioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
