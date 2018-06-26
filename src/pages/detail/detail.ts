import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotesService } from '../../app/notes.service';

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  note;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
      private notesService: NotesService) {
    this.note = this.navParams.get('noteParam');
  }

  onTrash(){
    this.notesService.removeNote(this.note);
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
