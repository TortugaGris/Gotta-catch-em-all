import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AuthGuard } from './core/auth.guard';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { GrassViewComponent } from './grass-view/grass-view.component';
import { PokemonViewComponent } from './pokemon-view/pokemon-view.component';
import { CardModule } from 'primeng/card';
import { PokemonNamePipe } from './pipes/pokemon-name.pipe';
import { TypesPipe } from './pipes/types.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    GrassViewComponent,
    PokemonViewComponent,
    PokemonNamePipe,
    TypesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    HttpClientModule,
    CardModule,
  ],
  providers: [
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
