import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'turntracker';
  characters: Character[] = [];
  character_form = this.fb.group({
    name: [''],
    initiative: [0],
    dex_mod: [0],
    current_hp: [0],
    max_hp: [0],
    alert: [false]
  })

  constructor(private fb: FormBuilder){
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
