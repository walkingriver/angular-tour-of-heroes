import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Observable<Hero[]>;

  constructor(
    private router: Router,
    private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.heroes =
      this.heroService.getHeroes()
        .pipe(tap((x: Hero[]) => {
          console.log(x);
        }));
  }

  gotoDetail(hero: Hero) {
    const link = ['/detail', hero.id];
    return this.router.navigate(link);
  }
}
