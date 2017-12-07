(function(exports){

  function NoteController (notelistview = new  NoteListView, noteSingleView = new  NoteSingleView) {
    this.noteListView = notelistview;
    this.noteSingleView = noteSingleView;
    // this.noteList = noteListView.noteList.returnNotes()
  }

  NoteController.prototype.addNote = function(note){
    this.noteListView.noteList.saveAndCreateNote(note)
  }

  NoteController.prototype.switchHTML = function() {
    var index = document.getElementById('app');
    index.innerHTML = this.noteListView.printlist();
    return this.noteListView.printlist();
  }

  NoteController.prototype.singleNotePost = function() {

    function showNoteForCurrentPage() {
      showNote(getNoteFromUrl(window.location));
      console.log(1);
    };

    function getNoteFromUrl(location) {
      return parseInt(location.hash.split("/")[1]);
      console.log(2);
    };

    function showNote(note) {
      console.log(this.noteListView.getList());
      // console.log(3);

      document
        .getElementById("app")
        .innerHTML = this.noteListView.noteList.returnNotes()[0];
    };

    window.addEventListener("hashchange", showNoteForCurrentPage)
  };

  exports.NoteController = NoteController;

})(this);
