(function(exports){

  function NoteController (notelistview = NoteListView) {
    this.noteListView = new notelistview();
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
