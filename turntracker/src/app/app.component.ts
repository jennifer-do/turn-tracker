import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'turntracker';
  characters: Character[] = [];
  character_turn: number = -1;

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
    this.character_turn = -1;
  }

  // for debugging
  showCharacterInfo(){
    console.log(this.characters);
  }

  sortByInitiative(){
    this.characters.sort((a,b) => {
      if(a.initiative != b.initiative)
        return b.initiative - a.initiative;
      else
        return b.dex_mod - a.dex_mod;
    })
  }

  changeCurrentHp(c: Character, inputElement: HTMLInputElement){
    let changeByInt: number = +inputElement.value;
    c.curr_hp += changeByInt;
    inputElement.value = '0';
  }

  nextTurn(){
    if(this.character_turn < this.characters.length-1)
      this.character_turn += 1;
    else
      this.character_turn = 0;
  }
}

export class Character {
  name: string;
  initiative: number;
  dex_mod: number;
  curr_hp: number;
  max_hp: number;
  alert: boolean;

  constructor(){
    this.name = '';
    this.initiative = 0;
    this.dex_mod = 0;
    this.curr_hp = 0;
    this.max_hp = 0;
    this.alert = false;
  }
}
