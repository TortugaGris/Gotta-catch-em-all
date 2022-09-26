import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { GrassViewComponent } from './grass-view/grass-view.component';
import { AuthGuard } from './core/auth.guard';
import { CapturesViewComponent } from './captures-view/captures-view.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'grass', component: GrassViewComponent, canActivate: [AuthGuard]},
  {path: 'captures', component: CapturesViewComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
