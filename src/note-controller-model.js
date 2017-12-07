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

  NoteController.prototype.listenForSubmit = function (){
      window.addEventListener('submit', function(submitEvent) {
        submitEvent.preventDefault();
        var note = (submitEvent.srcElement.elements["0"].value);
        console.log("submitted")
      })
    this.addNote(note);
  }


  NoteController.prototype.singleNotePost = function() {

    var content = this.noteListView.noteList.returnNotes()

    function showNoteForCurrentPage() {
      showNote((content[getNoteFromUrl(window.location)-1]).text());
    };

    function getNoteFromUrl(location) {
      return parseInt(location.hash.split("/")[1]);
    };

    function showNote(note) {
      document
        .getElementById("app")
        .innerHTML = note;
    };
    window.addEventListener("hashchange", showNoteForCurrentPage)

  };

  exports.NoteController = NoteController;

})(this);
