(function(exports){
  function Note(string){
    this.text = string
  }

  Note.prototype.store = function(){
    return this.text;
  };

  exports.Note = Note;
})(this);
