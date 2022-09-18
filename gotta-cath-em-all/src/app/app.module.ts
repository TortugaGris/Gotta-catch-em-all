import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { HttpClientModule } from '@angular/common/http'

const config = {
  apiKey: "AIzaSyC-zfmP__i_E68tdjcE3ZPUuKu-mwiaSIA",
  authDomain: "gotta-catch-em-all-353fe.firebaseapp.com",
  projectId: "gotta-catch-em-all-353fe",
  storageBucket: "gotta-catch-em-all-353fe.appspot.com",
  messagingSenderId: "377017776579",
  appId: "1:377017776579:web:c78538252027db312f2576"
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
