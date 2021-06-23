import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  addingHero = false;
  error: any;
  showNgFor = false;

  constructor(
    private modal: ModalController,
    private router: Router,
    private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe(
        heroes => (this.heroes = heroes),
        error => (this.error = error)
      )
  }

  async addHero() {
    this.addingHero = true;
    this.selectedHero = null;
    const adder = await this.modal.create({
      component: HeroDetailComponent,
      backdropDismiss: false
    });

    await adder.present();
    const { data } = await adder.onDidDismiss();
    this.close(data.hero);
  }

  close(savedHero: Hero): void {
    this.addingHero = false;
    if (savedHero) {
      this.getHeroes();
    }
  }

  deleteHero(hero: Hero, event: any): void {
    event.stopPropagation();
    this.heroService.delete(hero).subscribe(res => {
      this.heroes = this.heroes.filter(h => h !== hero);
      if (this.selectedHero === hero) {
        this.selectedHero = null;
      }
    }, error => (this.error = error));
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.addingHero = false;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
