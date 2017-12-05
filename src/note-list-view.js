(function(exports){

  function ViewList(noteList){
    this.noteList = noteList
  };

  ViewList.prototype.printlist = function(){
    stringArray = [];

    this.noteList.list.forEach(function(note){
      stringArray.push((note.text))
    })

    return stringArray.join('')
  };

  ViewList.prototype.stringtoHTML = function(string){
    return "<ul><li><div>" + string + "</div></li></ul>"
  };

  exports.ViewList = ViewList;

})(this);
