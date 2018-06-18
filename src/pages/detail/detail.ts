import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  note;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.note = this.navParams.get('noteParam');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
