(function(exports) {

  function NoteListView(notelist = new NoteList){
    this.noteList = notelist;
  }

  NoteListView.prototype.printlist = function(){
    function minify(note){
      return note.text().slice(0, 20)
    ;}
    console.log(this.noteList.returnNotes())
    noteArray = this.noteList.returnNotes().map(function(note){
      return `<ul><li><div><a href="#${note.id}">${minify(note)}</a></div></li></ul>`
    })
    return noteArray.join('')
  }


  exports.NoteListView = NoteListView;

})(this);
