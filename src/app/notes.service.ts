export class NotesService {
    
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

    removeNote(note){
        let index = this.notes.indexOf(note);
        if(index > -1){
            this.notes.splice(index, 1);
        }
    }

    addNote(note){
        this.notes.push(note);
    }
}