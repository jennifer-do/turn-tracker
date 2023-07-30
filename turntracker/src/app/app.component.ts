import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'turntracker';
  characters: Character[] = [];

  constructor(){
    // add at least one character
    this.characters.push(new Character());
  }

  addCharacter(){
    this.characters.push(new Character());
  }

  removeCharacter(index: number){
    this.characters.splice(index, 1);
  }

  clear(){
    this.characters = [new Character()];
  }
}

export class Character {
  initiative: number;
  dex_mod: number;
  curr_hp: number;
  max_hp: number;
  alert: boolean;

  constructor(){
    this.initiative = 0;
    this.dex_mod = 0;
    this.curr_hp = 0;
    this.max_hp = 0;
    this.alert = false;
  }
}
