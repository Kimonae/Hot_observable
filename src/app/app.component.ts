import { Component, VERSION } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  subj = new Subject();

  constructor() {
    //souscrire à l'observable subj = subscribe

    this.subj.subscribe((data) => console.log(data, '1er observer'));

    //don de valeur
    this.subj.next(1);

    this.subj.subscribe((data) => console.log(data, '2e observer'));

    this.subj.next(Math.random()); //même valeur

    this.subj.subscribe((data) => console.log(data, '3e observer')); //après .next  => pas de valeur
  }
}
