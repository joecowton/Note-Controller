(function(exports) {

  // function NoteListView(notelist = NoteList){
  //   this.noteList = new notelist()
  // }
  //
  // NoteListView.prototype.printlist = function(){
  //   function minify(note){return note.text().slice(0, 20);}
  //   noteArray = this.noteList.list.map(function(note){
  //     return `<ul><li><div><a href="#${note.id}">${minify(note)}</a></div></li></ul>`
  //   })
  //   return noteArray.join('')
  // }

  function NoteListView(notelist = NoteList){
    this.noteList =  notelist
  }

  NoteListView.prototype.printlist = function(){
    noteArray = this.noteList.list()
    return noteArray.join('')
  }

  exports.NoteListView = NoteListView;

})(this);
