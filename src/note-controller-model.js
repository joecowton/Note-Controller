(function(exports){

  function NoteController (notelistview = NoteListView, noteSingleView = NoteSingleView) {
    this.noteListView = new notelistview();
    this.noteSingleView = new noteSingleView();
  }

  NoteController.prototype.addNote = function(note){
    this.noteListView.noteList.saveAndCreateNote(note)
  }

  NoteController.prototype.switchHTML = function() {
    var index = document.getElementById('app');
    index.innerHTML = this.noteListView.printlist();
  }

  NoteController.prototype.singleNotePost = function() {
    window.addEventListener("hashchange", showNoteForCurrentPage);
  }

  function showNoteForCurrentPage() {
    showNote(getNoteFromUrl(window.location));
  };

  function getNoteFromUrl(location) {
    return location.hash.split("#")[0];
  };

  function showNote(note) {
    document
      .getElementById("app")
      .innerHTML = note ;
  };

  exports.NoteController = NoteController;

})(this);
