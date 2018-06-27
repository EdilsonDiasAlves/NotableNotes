import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NotesService } from '../../app/notes.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  notes;

  constructor(public navCtrl: NavController, private notesService:NotesService) {
    this.notes = notesService.notes;
  }

  onItemClick(note){
    this.navCtrl.push('DetailPage', {
      noteParam : note
    });
  }

  onAddClick(){
    this.navCtrl.push('DetailPage');
  }

}
