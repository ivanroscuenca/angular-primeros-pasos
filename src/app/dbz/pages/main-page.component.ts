import { Component, OnInit } from '@angular/core';
import { DbzService } from '../dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  //inyectamos servicio en en el constructor
  constructor(private dbzService: DbzService) {}
  //getters
  get characters(): Character[] {
    return this.dbzService.characters;
  }

  onDeleteCharacter(id: string): void {
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character) {
    this.dbzService.addNewCharacter(character);
  }
}
