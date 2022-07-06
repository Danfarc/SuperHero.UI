import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SuperHero } from '../../models/super-hero';
import { SuperHeroService } from '../../services/super-hero.service';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css']
})
export class EditHeroComponent implements OnInit {
  @Input() hero?: SuperHero;
  @Output() heroesUpdate = new EventEmitter<SuperHero[]>();

  constructor(private SuperHeroService: SuperHeroService) { }

  ngOnInit(): void {
  }

  updateHero(hero:SuperHero){
    this.SuperHeroService
    .updateHero(hero)
    .subscribe((heroes: SuperHero[]) => this.heroesUpdate.emit(heroes));
  }

  deleteHero(hero:SuperHero){
    this.SuperHeroService
    .deleteHero(hero)
    .subscribe((heroes: SuperHero[]) => this.heroesUpdate.emit(heroes));
  }

  createHero(hero:SuperHero){
    this.SuperHeroService
    .createHero(hero)
    .subscribe((heroes: SuperHero[]) => this.heroesUpdate.emit(heroes));
  }


}
