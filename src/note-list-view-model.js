(function(exports) {

  function NoteListView(notelist = NoteList){
    this.noteList = new notelist()
  }

  NoteListView.prototype.printlist = function(){
    noteArray = this.noteList.list.map(function(note){
      return `<li><div><a href="#${note.id}">${note.text.slice(0, 20)}</a></div></li>`
    })
    return noteArray.join('')
  }

  exports.NoteListView = NoteListView;

})(this);
