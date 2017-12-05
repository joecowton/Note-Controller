(function(exports){

  function NoteList (note = Note) {
    this.list = []
    this.noteClass = note
  }

  NoteList.prototype.returnNotes = function(){
    return this.list
  }

  NoteList.prototype.saveAndCreateNote = function(text){
    this.list.push(new this.noteClass(text))
  }

  exports.NoteList = NoteList;

})(this);
