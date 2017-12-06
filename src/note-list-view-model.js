(function(exports) {

  function NoteListView(notelist = NoteList){
    this.noteList = new notelist()
  }

  NoteListView.prototype.printlist = function(){
    stringArray = [];

    this.noteList.list.forEach(function(note){
      stringArray.push(stringtoHTML(note.text))
    })

    return stringArray.join('')
  }

  function stringtoHTML (string){
    return "<ul><li><div>" + string + "</div></li></ul>"
  }

  exports.NoteListView = NoteListView;

})(this);
