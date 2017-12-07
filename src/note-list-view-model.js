(function(exports) {

  function NoteListView(notelist = new NoteList){
    this.noteList = notelist;
  }

  NoteListView.prototype.getList = function(){
    return this.noteList;
  }



  NoteListView.prototype.printlist = function(){
    function minify(note){
      return note.text().slice(0, 20)
    ;}

    noteArray = this.noteList.returnNotes().map(function(note){
      return `<ul><li><div><a href="#notes/${note.id}">${minify(note)}</a></div></li></ul>`
    })
    return noteArray.join('')
  }

  exports.NoteListView = NoteListView;

})(this);
