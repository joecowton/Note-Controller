(function(exports){

  function Note(text, id = 0){
    this.text = text
    this.id = id
  }

  Note.prototype.store = function(){
    return this.text;
  }

  exports.Note = Note;

})(this);
