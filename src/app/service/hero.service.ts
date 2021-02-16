import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})

export class Hero.Service {
        {
          id: 1;
          name: 'Zsofi';
          superpower: 'smart';
          address: 'Győr';
        };

        {
          id: 2;
          name: 'Attila';
          superpower: 'fast';
          address: 'Budapest';
        };

        {
          id: 3;
          name: 'Richard';
          superpower: 'clever';
          address: 'Nyíregyháza';
        };

        {
          id: 4;
          name: 'Máté';
          superpower: 'patient';
          address: 'Bük';
        };

        {
          id: 5;
          name: 'János';
          superpower: 'fast';
          address: 'Szeged';
        };

        getAll(): Hero[]; {
            return this.heroes
          }
}
