(function(exports){

function NoteController (noteList = NoteList) {
  this.noteList = new NoteList();
  this.viewList = new ViewList();
}

  NoteController.prototype.addNote = function(note){
     this.noteList.saveList(note)
  }

  NoteController.prototype.noteListView = function(noteList) {
    var index = document.getElementById('app');
    index.innerHTML = viewlist.printlist(noteList);
  }

  exports.NoteController = NoteController;

})(this);
