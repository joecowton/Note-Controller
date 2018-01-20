(function(exports){

  function NoteController (notelistview = new  NoteListView, noteSingleView = new  NoteSingleView) {
    this.noteListView = notelistview;
    this.noteSingleView = noteSingleView;
  };

  NoteController.prototype.addNote = function(note){
    this.noteListView.noteList.saveAndCreateNote(note);
  };

  NoteController.prototype.switchHTML = function() {
    var index = document.getElementById('app');
    index.innerHTML = this.noteListView.printlist();
    return this.noteListView.printlist();
  };

  NoteController.prototype.listenForSubmit = function (){
    var self = this
      window.addEventListener('submit', function(submitEvent) {
        submitEvent.preventDefault();
        self.addNote(submitEvent.srcElement.elements["0"].value);
        self.switchHTML();
        self.singleNotePost();
      });
  };

  NoteController.prototype.loadContent = function () {
    var self = this
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        console.log(JSON.parse(this.responseText).response.results[0].pillarName);
      };
    };
    xhttp.open("GET", "https://content.guardianapis.com/search?business&api-key=53f2b43f-aa5f-4910-8a62-d5a63d730359", true);
    xhttp.send()
  };

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
