import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
export class FirstService {
  constructor() {}

  afficherSalut() {
    console.log('Salut ! Je suis le First Service');
  }
}
