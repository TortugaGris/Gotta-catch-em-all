import { Component, OnInit } from '@angular/core';
import { PokemonCaptureService } from '../services/pokemon-capture.service';
import { AuthService } from '../services/auth.service'; 
import { filter, Observable, switchMap } from 'rxjs';
import { User } from '../services/user.model';
import { ICaptureList } from '../interfaces/ICaptureList';

@Component({
  selector: 'app-captures-view',
  templateUrl: './captures-view.component.html',
  styleUrls: ['./captures-view.component.scss']
})
export class CapturesViewComponent implements OnInit {
  captures$: Observable<ICaptureList[]>;

  constructor(public pokemonCapture: PokemonCaptureService,
              private auth: AuthService) { 
    this.captures$ = this.auth.getUser().pipe(
      filter((user): user is User => !!user),
      switchMap((user) => this.pokemonCapture.getUserCaptures(user.uid)))
  }

  ngOnInit(): void {}
}
