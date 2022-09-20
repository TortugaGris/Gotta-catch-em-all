import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { GrassViewComponent } from './grass-view/grass-view.component';
import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'grass', component: GrassViewComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
