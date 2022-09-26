import { Component, OnInit } from '@angular/core';
import { PokemonCaptureService } from '../services/pokemon-capture.service';
import { AuthService } from '../services/auth.service'; 
import { filter, Observable, tap, switchMap, map } from 'rxjs';
import { User } from '../services/user.model';
import { ICaptureList } from '../interfaces/ICaptureList';
import { FieldValue, Timestamp } from 'firebase/firestore';

@Component({
  selector: 'app-captures-view',
  templateUrl: './captures-view.component.html',
  styleUrls: ['./captures-view.component.scss']
})
export class CapturesViewComponent implements OnInit {
  uid="";
  captures$: Observable<ICaptureList[]>;

  constructor(public pokemonCapture: PokemonCaptureService,
              private auth: AuthService) { 
    this.captures$ = this.auth.getUser().pipe(
      filter((user): user is User => !!user),
      tap((user) => this.uid = user.uid),
      switchMap((user) => this.pokemonCapture.getUserCaptures(user.uid)))
    // .subscribe(
    //   user => this.captures$ = this.pokemonCapture.getUserCaptures(user.uid),
    //   err => console.error(err))
  }

  ngOnInit(): void {
  }
  
  ngOnDestroy(): void {
  }

  asTimestamp(date: (()=>FieldValue) | FieldValue | Timestamp | undefined) {
    if (date) return (date as Timestamp)
    else return null
  }

  print(value: object) {
    console.log(value)
  }

}
