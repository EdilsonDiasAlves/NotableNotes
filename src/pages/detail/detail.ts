import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { NotesService } from '../../app/notes.service';
import { text } from '@angular/core/src/render3/instructions';

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  note;
  newNoteFlag = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private notesService: NotesService, private alertCtrl: AlertController) {
    this.note = this.navParams.get('noteParam');

    console.log(`Constructor -- note: ${JSON.stringify(this.note)}, statement: ${!this.note}`)

    if (!this.note) {
      this.note = {
        id: '',
        date: '',
        title: '',
        content: ''
      };
      this.newNoteFlag = true;
    }
  }

  onTrash() {
    let confirm = this.alertCtrl.create({
      title: 'Delete?',
      message: `Are you sure you want to remove the note ${this.note.title}?`,
      buttons: [{
        // If the user want to cancel, don't do anything 
        text: 'Cancel'
      },
      {
        // Otherwise, delegate the note to service and removes it 
        text: 'Confirm',
        handler: () => {
          this.notesService.removeNote(this.note);
          this.navCtrl.pop();
        }
      }
      ]
    });

    confirm.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  ionViewWillLeave() {
    if (this.note.date === '' && this.note.title == '' &&
      this.note.content == ''
    ) {
      // If note is blank don't do anything
    } else if (this.newNoteFlag){
      this.notesService.addNote(this.note);
    } else {
      // Note already exists, don't add it
    }
  }

}
