(function(exports){

  function NoteList(){
  this.list = []
};

NoteList.prototype = {
  saveList: function(note){
    return this.list.push(note);
  }
};

exports.NoteList = NoteList;
})(this);
