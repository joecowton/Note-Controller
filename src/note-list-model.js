(function(exports){

  function NoteList (note = Note) {
    this.list = [];
    this.noteClass = note;
    this.noteCount = 0;
  };

  NoteList.prototype.returnNotes = function(){
    return this.list;
  };

  NoteList.prototype.saveAndCreateNote = function(text){
    this.noteCount++;
    this.list.push(new this.noteClass(text, this.noteCount));
  };

  exports.NoteList = NoteList;

})(this);
