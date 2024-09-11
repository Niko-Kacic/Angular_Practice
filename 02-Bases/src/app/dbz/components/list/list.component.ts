import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  {
  @Input()//Descorador que permite propiedades del main-page.component
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }];


}
