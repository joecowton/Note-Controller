(function(exports){

function NoteController (noteListModel = new NoteList) {
  this.noteListModel = noteListModel
}

  NoteController.prototype.changeHTML = function(){
    var viewlist = new ViewList();
    var viewlist2 = viewlist.printlist();

    window.onload = function(){
      var index = document.getElementById('app');
      index.innerHTML = viewlist2
    };
  }

  NoteController.prototype.addNote = function(note){
    return this.noteListModel.list.push(note)
  }

  NoteController.prototype.noteListView = function(viewList = new ViewList) {
    var viewlist = viewList(this.noteListModel);
    return viewlist.printlist();
  }

  exports.NoteController = NoteController


})(this);
