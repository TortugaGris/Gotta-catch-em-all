import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {MenuItem} from 'primeng/api'; 

@Component({
  selector: 'app-pokeball-selector',
  templateUrl: './pokeball-selector.component.html',
  styleUrls: ['./pokeball-selector.component.scss']
})
export class PokeballSelectorComponent implements OnInit {
  items: MenuItem[];
  @Output() captureEvent = new EventEmitter<boolean>();

  constructor() {
    this.items = [
      {label: 'Let escape', command: ()=>{this.capturePokemon(0)}},
      {label: 'Poké Ball', command: ()=>{this.capturePokemon(0.25)}},
      {label: 'Ultra Ball', command: ()=>{this.capturePokemon(0.7)}},
      {label: 'Master Ball', command: ()=>{this.capturePokemon(1)}},
    ]
  }

  ngOnInit(): void {
  }

  capturePokemon(prob: number){
    this.captureEvent.emit(Math.random()<prob)
  }

}
