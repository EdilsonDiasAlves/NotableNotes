import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  notes = [
    {
      id: '1',
      date: '2016-01-01',
      title: 'Ionic',
      content: 'Learn the basics of Ionic'
    },
    {
      id: '2',
      date: '2016-02-01',
      title: 'Firebase',
      content: 'A great backend for Ionic'
    },
    {
      id: '3',
      date: '2016-03-01',
      title: 'Angular',
      content: 'A good grasp of it is crucial to developing great Ionic 2 apps'
    }
  ];

  onItemClick(note){
    this.navCtrl.push('DetailPage', {
      noteParam : note
    });
  }

}
