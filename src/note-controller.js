(function(exports){

  function NoteController (notelist = NoteList, notelistview = NoteListView) {
    this.noteList = new notelist();
    this.noteListView = new notelistview(notelist);
  }

  NoteController.prototype.addNote = function(note){
     this.noteListView.noteList.saveAndCreateNote(note)
  }

  NoteController.prototype.switchHTML = function() {
    var index = document.getElementById('app');
    index.innerHTML = this.noteListView.printlist();
  }

  exports.NoteController = NoteController;

})(this);
